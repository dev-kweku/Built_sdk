import { BuiltClient } from "../../core/BuiltClient";
import { Withdrawal, CreateWithdrawalPayload } from "../../types/withdrawals";
import { PaginatedResult } from "../../types/common";

export class Withdrawals {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<Withdrawal>> {
        return this.client.request({
        method: "GET",
        url: "/withdrawals",
        params,
        });
    }

    async create(payload: CreateWithdrawalPayload): Promise<Withdrawal> {
        return this.client.request({
        method: "POST",
        url: "/withdrawals",
        data: payload,
        });
    }

    async get(id: string): Promise<Withdrawal> {
        return this.client.request({
        method: "GET",
        url: `/withdrawals/${encodeURIComponent(id)}`,
        });
    }

    async cancel(id: string): Promise<any> {
        return this.client.request({
        method: "POST",
        url: `/withdrawals/${encodeURIComponent(id)}/cancel`,
        });
    }
}
