export type InvoiceStatus=
| "draft"|"awaiting"|"paid"|"overdue"|"cancelled"

export interface Invoice{
    uuid:string;
    invoice_number?:string;
    status:InvoiceStatus;
    currency:string;
    total:number;
    balance:number;
    due_date?:string;
    created_at?:string;
    updated_at?:string;
    link:string;

}

export interface CreateInvoicePayload{
    customer_uuid?:string;
    customer?:{
        name:string;
        email?:string;
        phone?:string;
    };

    line_items:Array<{
        description:string;
        quantity:number;
        unit_price:number;
        tax?:number;
    }>;

    due_date?:string;
    notes?:string;
    currency?:string;
    metadata?:Record<string,any>
}

export interface UpdateInvoicePayload
extends Partial<CreateInvoicePayload>{}

export interface AddPaymentPayload{
    invoice_uuid:string;
    payment_method?:string;
    note?:string;
}

export interface SendReminderPayload{
    invoice_uuid:string;
    message?:string;
    via?:"email"|"sms"|"whatsapp"
}

export interface ShareInvoicePayload{
    invoice_uuid:string;
    to:string;
    via?:"email"|"sms"|"whatsapp"
}