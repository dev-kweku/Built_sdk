    export interface Deposit {
        uuid: string;
        reference?: string;
        amount: number;
        currency: string;
        source?: string;
        linked_invoice_uuid?: string;
        created_at?: string;
        updated_at?: string;
        notes?: string;
    }
    
    export interface CreateDepositPayload {
        amount: number;
        currency: string;
        source?: string;
        date?: string;
        reference?: string;
        notes?: string;
    }
    
    export interface UpdateDepositPayload
        extends Partial<CreateDepositPayload> {}
    
    export interface LinkDepositPayload {
        deposit_uuid: string;
        invoice_uuid: string;
    }
    
    export interface UnlinkDepositPayload {
        deposit_uuid: string;
    }
    