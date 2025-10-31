export interface Transfer {
    uuid: string;
    amount: number;
    currency: string;
    from_account?: string;
    to_account?: string;
    status?: "pending" | "successful" | "failed";
    reference?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateTransferPayload {
        amount: number;
        currency?: string;
        to_account: string;
        from_account?: string;
        reference?: string;
        metadata?: Record<string, any>;
    }
    