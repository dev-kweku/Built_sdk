export interface Bill {
    uuid: string;
    bill_number?: string;
    supplier_uuid?: string;
    currency: string;
    total: number;
    balance: number;
    due_date?: string;
    created_at?: string;
    updated_at?: string;
    status?: "draft" | "awaiting" | "paid" | "overdue";
    }
    
    export interface CreateBillPayload {
        supplier_uuid?: string;
        items: Array<{
        description: string;
        quantity: number;
        unit_price: number;
        tax?: number;
        }>;
        currency: string;
        due_date?: string;
        notes?: string;
    }
    
    export interface UpdateBillPayload extends Partial<CreateBillPayload> {}
    
    export interface PayBillPayload {
        bill_uuid: string;
        amount: number;
        payment_method?: string;
        note?: string;
    }
    