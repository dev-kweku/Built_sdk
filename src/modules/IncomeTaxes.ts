    import { BuiltClient } from "../core/BuiltClient";
    import {
    IncomeTaxPayment,
    CreateIncomeTaxPaymentPayload,
    UpdateIncomeTaxPaymentPayload,
    } from "../types/incomeTaxes";
    import { PaginatedResult } from "../types/common";

    export class IncomeTaxes {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<IncomeTaxPayment>> {
        return this.client.request({
        method: "GET",
        url: "/income-tax-payments",
        params,
        });
    }

    async create(payload: CreateIncomeTaxPaymentPayload): Promise<IncomeTaxPayment> {
        return this.client.request({
        method: "POST",
        url: "/income-tax-payments",
        data: payload,
        });
    }

    async get(id: string): Promise<IncomeTaxPayment> {
        return this.client.request({
        method: "GET",
        url: `/income-tax-payments/${encodeURIComponent(id)}`,
        });
    }

    async update(
        id: string,
        payload: UpdateIncomeTaxPaymentPayload
    ): Promise<IncomeTaxPayment> {
        return this.client.request({
        method: "POST",
        url: `/income-tax-payments/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/income-tax-payments/${encodeURIComponent(id)}`,
        });
    }
    }
