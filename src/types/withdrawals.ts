export interface Withdrawal {
    uuid: string;
    amount: number;
    currency: string;
    status: "pending" | "processing" | "successful" | "failed" | "cancelled";
    destination?: string; // e.g., bank account id
    reference?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateWithdrawalPayload {
        amount: number;
        currency?: string;
        destination: {
        type: "bank_account" | "mobile_money";
        account_number?: string;
        bank_code?: string;
        phone?: string;
        name?: string;
        };
        reference?: string;
        metadata?: Record<string, any>;
    }
    