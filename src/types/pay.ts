export interface Payment {
    uuid: string;
    amount: number;
    currency: string;
    status: "pending" | "successful" | "failed";
    method?: string;
    reference?: string;
    created_at?: string;
    updated_at?: string;
    metadata?: Record<string, any>;
    }
    
    export interface InitiatePaymentPayload {
        amount: number;
        currency?: string;
        return_url?: string;
        metadata?: Record<string, any>;
        customer?: {
        name?: string;
        email?: string;
        phone?: string;
        };
    }
    