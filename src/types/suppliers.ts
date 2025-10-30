export interface Supplier {
    uuid: string;
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    created_at?: string;
    updated_at?: string;
    }
    
    export interface CreateSupplierPayload {
        name: string;
        email?: string;
        phone?: string;
        address?: string;
    }
    
    export interface UpdateSupplierPayload extends Partial<CreateSupplierPayload> {}
    