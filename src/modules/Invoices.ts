import { BuiltClient } from "../core/BuiltClient";
import { Invoice,CreateInvoicePayload,UpdateInvoicePayload,AddPaymentPayload,SendReminderPayload,ShareInvoicePayload } from "../types/invoices";
import { PaginatedResult } from "../types/common";
import fs from "fs/promises"
import path from "path";

export class Invoices{
    constructor(private client:BuiltClient){}
    

    async list(params?:Record<string,any>):Promise<PaginatedResult<Invoice>>{
        return this.client.request({
            method:"GET",
            url:"/invoices",
            params,
        })
    }
}