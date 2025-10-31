import { BuiltClient } from "../../core/BuiltClient";
import { Topup, CreateTopupPayload } from "../../types/topups";
import { PaginatedResult } from "../../types/common";

export class Topups {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<Topup>> {
        return this.client.request({
        method: "GET",
        url: "/topups",
        params,
        });
    }

    async create(payload: CreateTopupPayload): Promise<Topup> {
        return this.client.request({
        method: "POST",
        url: "/topups",
        data: payload,
        });
    }

    async get(id: string): Promise<Topup> {
        return this.client.request({
        method: "GET",
        url: `/topups/${encodeURIComponent(id)}`,
        });
    }
}
