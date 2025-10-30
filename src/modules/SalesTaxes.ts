    import { BuiltClient } from "../core/BuiltClient";
    import {
    SalesTax,
    CreateSalesTaxPayload,
    UpdateSalesTaxPayload,
    } from "../types/salesTaxes";
    import { PaginatedResult } from "../types/common";

    export class SalesTaxes {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<SalesTax>> {
        return this.client.request({
        method: "GET",
        url: "/sales-tax",
        params,
        });
    }

    async create(payload: CreateSalesTaxPayload): Promise<SalesTax> {
        return this.client.request({
        method: "POST",
        url: "/sales-tax",
        data: payload,
        });
    }

    async get(id: string): Promise<SalesTax> {
        return this.client.request({
        method: "GET",
        url: `/sales-tax/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdateSalesTaxPayload): Promise<SalesTax> {
        return this.client.request({
        method: "POST",
        url: `/sales-tax/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/sales-tax/${encodeURIComponent(id)}`,
        });
    }
    }
