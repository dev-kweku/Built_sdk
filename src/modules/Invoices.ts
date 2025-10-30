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
        return this.client.request({
            method:"POST",
            url:"/invoice/payments",
            data:payload,
        })
    }

    async removePayment(paymentId:string){
        await this.client.request({
            method:"DELETE",
            url:`/invoices/payments/${encodeURIComponent(paymentId)}`,
        })
    }

    async sendReminder(payload:SendReminderPayload){
        return this.client.request({
            method:"POST",
            url:"/invoices/send-manual-remainder",
            data:payload,
        })
    }

    async share(payload:ShareInvoicePayload){
        return this.client.request({
            method:"POST",
            url:"/invoices/share",
            data:payload,
        })
    }

    async download(invoiceId:string,filePath?:string):Promise<Buffer>{
        const buffer=await this.client.request<ArrayBuffer>({
            method:"GET",
            url:`/invoices/${encodeURIComponent(invoiceId)}/download`,
            responseType:"arraybuffer" as any
        });

        const file=Buffer.from(buffer);
        if(filePath){
            await fs.mkdir(path.dirname(filePath),{recursive:true})
            await fs.writeFile(filePath,file)
        }
        return file;
    }

    async listByStatus(status:"overdue"|"awaiting"|"paid",params?:Record<string,any>):Promise<PaginatedResult<Invoice>>{
        const endpointMap={
            overdue:"/overdue-invoices",
            awaiting:"/awaiting-invoices",
            paid:"/paid-invoices",
        };

        return this.client.request({
            method:"GET",
            url:endpointMap[status],
            params
        })
    }
}