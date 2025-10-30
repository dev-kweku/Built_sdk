export interface SalesTax {
    uuid: string;
    amount: number;
    date: string;
    reference?: string;
    notes?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateSalesTaxPayload {
        amount: number;
        date: string;
        reference?: string;
        notes?: string;
    }
    
    export interface UpdateSalesTaxPayload extends Partial<CreateSalesTaxPayload> {}
    