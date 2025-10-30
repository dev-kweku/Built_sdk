export interface PaidExpense {
    uuid: string;
    reference?: string;
    amount: number;
    currency: string;
    supplier_uuid?: string;
    description?: string;
    date?: string;
    created_at?: string;
    updated_at?: string;
    notes?: string;
    }
    
    export interface CreatePaidExpensePayload {
    amount: number;
    currency: string;
    supplier_uuid?: string;
    description?: string;
    date?: string;
    notes?: string;
    }
    
    export interface UpdatePaidExpensePayload
        extends Partial<CreatePaidExpensePayload> {}
    