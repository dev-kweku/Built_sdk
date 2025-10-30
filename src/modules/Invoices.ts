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

    async create(payload:CreateInvoicePayload):Promise<Invoice>{
        return this.client.request({
            method:"POST",
            url:"/invoices",
            data:payload,
        })
    }

    async get(id:string):Promise<Invoice>{
        return this.client.request({
            method:"GET",
            url:`/invoices/${encodeURIComponent(id)}`,
        })
    }

    async update(id:string,payload:UpdateInvoicePayload):Promise<Invoice>{
        return this.client.request({
            method:"POST",
            url:`/invoices/${encodeURIComponent(id)}`,
            data:payload,
        })
    }

    async delete(id:string):Promise<void>{
        await this.client.request({
            method:"DELETE",
            url:`/invoices/${encodeURIComponent(id)}`,
            
        })
    }

    async addPayment(payload:AddPaymentPayload){
        return this.client.client.request({
            method:"POST",
            url:"/invoice/payments",
            data:payload,
        })
    }
}