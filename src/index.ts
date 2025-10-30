import { BuiltClient,BuiltClientOptions } from "./core/BuiltClient";
import { Invoices } from "./modules/Invoices";


export class BuiltSDK{
    public invoices:Invoices;
    private client:BuiltClient;


    constructor(options:BuiltClientOptions){
        this.client=new BuiltClient(options);
        this.invoices=new Invoices(this.client)
    }
}

export default BuiltSDK;