    import { BuiltClient } from "../../core/BuiltClient";
    import { Payment, InitiatePaymentPayload } from "../../types/pay";
    import { PaginatedResult } from "../../types/common";

    export class Pay {
    constructor(private client: BuiltClient) {}

    async initiate(payload: InitiatePaymentPayload): Promise<Payment> {
        return this.client.request({
        method: "POST",
        url: "/pay/initiate",
        data: payload,
        });
    }

    async verify(reference: string): Promise<Payment> {
        return this.client.request({
        method: "GET",
        url: `/pay/verify/${encodeURIComponent(reference)}`,
        });
    }

    async list(params?: Record<string, any>): Promise<PaginatedResult<Payment>> {
        return this.client.request({
        method: "GET",
        url: "/pay",
        params,
        });
    }

    async get(reference: string): Promise<Payment> {
        return this.client.request({
        method: "GET",
        url: `/pay/${encodeURIComponent(reference)}`,
        });
    }
    }
