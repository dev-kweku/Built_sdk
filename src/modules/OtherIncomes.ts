    import { BuiltClient } from "../core/BuiltClient";
    import {
    OtherIncome,
    CreateOtherIncomePayload,
    UpdateOtherIncomePayload,
    } from "../types/otherIncomes";
    import { PaginatedResult } from "../types/common";

    export class OtherIncomes {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<OtherIncome>> {
        return this.client.request({
        method: "GET",
        url: "/other-incomes",
        params,
        });
    }

    async create(payload: CreateOtherIncomePayload): Promise<OtherIncome> {
        return this.client.request({
        method: "POST",
        url: "/other-incomes",
        data: payload,
        });
    }

    async get(id: string): Promise<OtherIncome> {
        return this.client.request({
        method: "GET",
        url: `/other-incomes/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdateOtherIncomePayload): Promise<OtherIncome> {
        return this.client.request({
        method: "POST",
        url: `/other-incomes/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/other-incomes/${encodeURIComponent(id)}`,
        });
    }
    }
