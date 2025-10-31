export interface PaymentLink {
    uuid: string;
    title?: string;
    amount?: number;
    currency?: string;
    slug?: string;
    link?: string;
    active?: boolean;
    created_at?: string;
    updated_at?: string;
    metadata?: Record<string, any>;
    }
    
    export interface CreatePaymentLinkPayload {
        title?: string;
        amount?: number;
        currency?: string;
        description?: string;
        redirect_url?: string;
        metadata?: Record<string, any>;
        expires_at?: string;
    }
    
    export interface UpdatePaymentLinkPayload extends Partial<CreatePaymentLinkPayload> {}
    