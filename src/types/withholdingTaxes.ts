export interface WithholdingTax {
    uuid: string;
    amount: number;
    date: string;
    reference?: string;
    notes?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateWithholdingTaxPayload {
        amount: number;
        date: string;
        reference?: string;
        notes?: string;
    }
    
    export interface UpdateWithholdingTaxPayload
        extends Partial<CreateWithholdingTaxPayload> {}
    