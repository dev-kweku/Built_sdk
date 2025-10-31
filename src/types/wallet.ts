export interface WalletBalance{
    currency:string;
    balance:number;
    available_balance?:number;
    reserved?:number;
    updated_at:string;
}

export interface WalletTransaction{
    uuid:string;
    type:"credit"|"debit";
    amount:number;
    reference?:string;
    description?:string;
    created_at?:string;
    metadata?:Record<string,any>;
}

export interface WalletTransactionsParams{
    page?:number;
    per_page?:number;
    start_date?:string;
    end_date?:string;
}