    import { BuiltClient } from "../core/BuiltClient";
    import {
    Bill,
    CreateBillPayload,
    UpdateBillPayload,
    PayBillPayload,
    } from "../types/bills";
    import { PaginatedResult } from "../types/common";

    export class Bills {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<Bill>> {
        return this.client.request({
        method: "GET",
        url: "/bills",
        params,
        });
    }

    async create(payload: CreateBillPayload): Promise<Bill> {
        return this.client.request({
        method: "POST",
        url: "/bills",
        data: payload,
        });
    }

    async get(id: string): Promise<Bill> {
        return this.client.request({
        method: "GET",
        url: `/bills/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdateBillPayload): Promise<Bill> {
        return this.client.request({
        method: "POST",
        url: `/bills/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/bills/${encodeURIComponent(id)}`,
        });
    }

    async pay(payload: PayBillPayload): Promise<any> {
        return this.client.request({
        method: "POST",
        url: "/bills/pay",
        data: payload,
        });
    }
    }
