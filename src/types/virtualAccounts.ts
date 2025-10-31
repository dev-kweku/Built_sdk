export interface VirtualAccount {
    uuid: string;
    number?: string;
    bank?: string;
    currency?: string;
    reference?: string;
    status?: "active" | "closed";
    created_at?: string;
    updated_at?: string;
    assigned_to?: string; // customer or business uuid
    }
    
    export interface CreateVirtualAccountPayload {
        currency?: string;
        assigned_to?: string; // optional customer/business uuid
        reference?: string;
        metadata?: Record<string, any>;
    }
    