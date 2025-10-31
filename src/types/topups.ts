export interface Topup {
    uuid: string;
    amount: number;
    currency: string;
    status: "pending" | "successful" | "failed";
    payment_method?: string;
    reference?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateTopupPayload {
        amount: number;
        currency?: string;
        source?: string; // e.g., mobile_money, bank_transfer
        reference?: string;
        metadata?: Record<string, any>;
    }
    