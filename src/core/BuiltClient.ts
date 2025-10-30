import axios,{AxiosInstance,AxiosRequestConfig,AxiosResponse} from "axios"
import { HttpError } from "./HttpError"

export interface BuiltClientOptions{
    apiKey:string;
    baseUrl?:string;
    timeoutMs?:number;
    maxRetries?:number;
}

export class BuiltClient{
    private client:AxiosInstance;
    private apiKey:string;
    private maxRetries:number;


    constructor(opts:BuiltClientOptions){
        if(!opts?.apiKey) throw new Error("BuiltClient requires an API KEY");

        this.apiKey=opts.apiKey;
        this.maxRetries=opts.maxRetries??2;

        this.client=axios.create({
        baseURL:opts.baseUrl??"https://api.built.africa/api/v3",
        timeout:opts.timeoutMs??10000,
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${this.apiKey}`

        }
        })
    }

    private async sleep(status?:number){
        return !status||status>=500||status===429
    }

    private isRetriable(status?:number){
        return !status||status>=500||status===429;
    }

    async request<T=any>(config:AxiosRequestConfig):Promise<T>{
        let attempt=0;
        let lastError:any;

        while(attempt<=this.maxRetries){
            try{
                const resp:AxiosResponse<T>=await this.client.request<T>(config);
                return resp.data;

            }catch(err:any){
                lastError=err;
                const status=err?.response?.status;

                if(!this.isRetriable(status)||attempt===this.maxRetries){
                    const message=err?.response?.data?.message||err.message||"Built Api Error";

                    throw new HttpError(message,status??500,err?.response?.data?.code,err?.response?.data)
                }

                await this.sleep(Math.pow(2,attempt)*250);
                attempt++;

            }
        }
        throw new HttpError("Request failed after retries",500,undefined,lastError)

    }
}