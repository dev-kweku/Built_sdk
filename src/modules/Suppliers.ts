    import { BuiltClient } from "../core/BuiltClient";
    import {
    Supplier,
    CreateSupplierPayload,
    UpdateSupplierPayload,
    } from "../types/suppliers";
    import { PaginatedResult } from "../types/common";

    export class Suppliers {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<Supplier>> {
        return this.client.request({
        method: "GET",
        url: "/suppliers",
        params,
        });
    }

    async create(payload: CreateSupplierPayload): Promise<Supplier> {
        return this.client.request({
        method: "POST",
        url: "/suppliers",
        data: payload,
        });
    }

    async get(id: string): Promise<Supplier> {
        return this.client.request({
        method: "GET",
        url: `/suppliers/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdateSupplierPayload): Promise<Supplier> {
        return this.client.request({
        method: "POST",
        url: `/suppliers/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/suppliers/${encodeURIComponent(id)}`,
        });
    }
    }
