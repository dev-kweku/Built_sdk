    import { BuiltClient } from "../core/BuiltClient";
    import {
    WithholdingTax,
    CreateWithholdingTaxPayload,
    UpdateWithholdingTaxPayload,
    } from "../types/withholdingTaxes";
    import { PaginatedResult } from "../types/common";

    export class WithholdingTaxes {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<WithholdingTax>> {
        return this.client.request({
        method: "GET",
        url: "/withholding-tax",
        params,
        });
    }

    async create(payload: CreateWithholdingTaxPayload): Promise<WithholdingTax> {
        return this.client.request({
        method: "POST",
        url: "/withholding-tax",
        data: payload,
        });
    }

    async get(id: string): Promise<WithholdingTax> {
        return this.client.request({
        method: "GET",
        url: `/withholding-tax/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdateWithholdingTaxPayload): Promise<WithholdingTax> {
        return this.client.request({
        method: "POST",
        url: `/withholding-tax/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/withholding-tax/${encodeURIComponent(id)}`,
        });
    }
    }
