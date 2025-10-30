export interface OtherIncome {
    uuid: string;
    reference?: string;
    amount: number;
    currency: string;
    source?: string;
    date?: string;
    notes?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateOtherIncomePayload {
        amount: number;
        currency: string;
        source?: string;
        date?: string;
        notes?: string;
        reference?: string;
        metadata?: Record<string, any>;
    }
    
    export interface UpdateOtherIncomePayload
        extends Partial<CreateOtherIncomePayload> {}
    