export class HttpError extends Error{
    status:number;
    code?:string;
    details?:any;


    constructor(message:string,status=500,code?:string,details?:any){
        super(message);
        this.name="HttpError";
        this.status=status;
        this.code=code;
        this.details=details;
        Object.setPrototypeOf(this,HttpError.prototype)
    }
}