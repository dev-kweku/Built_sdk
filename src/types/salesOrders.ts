export type SalesOrderStatus=|"draft"|"confirmed"|"invoiced"|"cancelled"


export interface SalesOrder{
    uuid:string;
    order_number?:string;
    status:SalesOrderStatus;
    currency:number;
    total:number;
    due_date?:string;
    created_at?:string;
    updated_at?:string;
    link?:string;
    
};

export interface CreateSalesOrderPayload{
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
}>

due_date?:string;
notes?:string;
currency?:string;
metadata?:Record<string,any>
}

export interface UpdateSalesOrderPayload extends Partial<CreateSalesOrderPayload>{}

export interface ShareSalesOrderPayload{
    sales_order_uuid:string;
    to:string;
    via?:"email"|"sms"|"whatsapp"
}
