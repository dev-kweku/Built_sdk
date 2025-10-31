    import { BuiltClient } from "../../core/BuiltClient";
    import { PaymentLink, CreatePaymentLinkPayload, UpdatePaymentLinkPayload } from "../../types/paymentLinks";
    import { PaginatedResult } from "../../types/common";

    export class PaymentLinks {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<PaymentLink>> {
        return this.client.request({
        method: "GET",
        url: "/payment-links",
        params,
        });
    }

    async create(payload: CreatePaymentLinkPayload): Promise<PaymentLink> {
        return this.client.request({
        method: "POST",
        url: "/payment-links",
        data: payload,
        });
    }

    async get(id: string): Promise<PaymentLink> {
        return this.client.request({
        method: "GET",
        url: `/payment-links/${encodeURIComponent(id)}`,
        });
    }

    async deactivate(id: string): Promise<any> {
        return this.client.request({
        method: "POST",
        url: `/payment-links/${encodeURIComponent(id)}/deactivate`,
        });
    }

    async update(id: string, payload: UpdatePaymentLinkPayload): Promise<PaymentLink> {
        return this.client.request({
        method: "POST",
        url: `/payment-links/${encodeURIComponent(id)}`,
        data: payload,
        });
    }
    }
