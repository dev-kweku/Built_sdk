export interface IncomeTaxPayment {
    uuid: string;
    amount: number;
    date: string;
    reference?: string;
    notes?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateIncomeTaxPaymentPayload {
        amount: number;
        date: string;
        reference?: string;
        notes?: string;
    }
    
    export interface UpdateIncomeTaxPaymentPayload
        extends Partial<CreateIncomeTaxPaymentPayload> {}
    