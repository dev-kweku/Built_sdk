export interface QuickSale {
    uuid: string;
    reference?: string;
    amount: number;
    currency: string;
    customer_name?: string;
    customer_email?: string;
    date?: string;
    notes?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateQuickSalePayload {
    amount: number;
    currency: string;
    customer_name?: string;
    customer_email?: string;
    date?: string;
    notes?: string;
    reference?: string;
    metadata?: Record<string, any>;
    }
    
    export interface UpdateQuickSalePayload
        extends Partial<CreateQuickSalePayload> {}
    