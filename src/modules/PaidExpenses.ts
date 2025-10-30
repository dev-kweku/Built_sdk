    import { BuiltClient } from "../core/BuiltClient";
    import {
    PaidExpense,
    CreatePaidExpensePayload,
    UpdatePaidExpensePayload,
    } from "../types/PaidExpenses";
    import { PaginatedResult } from "../types/common";

    export class PaidExpenses {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<PaidExpense>> {
        return this.client.request({
        method: "GET",
        url: "/paid-expenses",
        params,
        });
    }

    async create(payload: CreatePaidExpensePayload): Promise<PaidExpense> {
        return this.client.request({
        method: "POST",
        url: "/paid-expenses",
        data: payload,
        });
    }

    async get(id: string): Promise<PaidExpense> {
        return this.client.request({
        method: "GET",
        url: `/paid-expenses/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdatePaidExpensePayload): Promise<PaidExpense> {
        return this.client.request({
        method: "POST",
        url: `/paid-expenses/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/paid-expenses/${encodeURIComponent(id)}`,
        });
    }
    }
