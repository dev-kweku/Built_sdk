    import { BuiltClient } from "../core/BuiltClient";
    import {
    QuickSale,
    CreateQuickSalePayload,
    UpdateQuickSalePayload,
    } from "../types/quickSales";
    import { PaginatedResult } from "../types/common";

    export class QuickSales {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<QuickSale>> {
        return this.client.request({
        method: "GET",
        url: "/quick-sales",
        params,
        });
    }

    async create(payload: CreateQuickSalePayload): Promise<QuickSale> {
        return this.client.request({
        method: "POST",
        url: "/quick-sales",
        data: payload,
        });
    }

    async get(id: string): Promise<QuickSale> {
        return this.client.request({
        method: "GET",
        url: `/quick-sales/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdateQuickSalePayload): Promise<QuickSale> {
        return this.client.request({
        method: "POST",
        url: `/quick-sales/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/quick-sales/${encodeURIComponent(id)}`,
        });
    }
    }
