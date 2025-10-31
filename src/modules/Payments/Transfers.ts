import { BuiltClient } from "../../core/BuiltClient";
import { Transfer, CreateTransferPayload } from "../../types/transfers";
import { PaginatedResult } from "../../types/common";

export class Transfers {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<Transfer>> {
        return this.client.request({
        method: "GET",
        url: "/transfers",
        params,
        });
    }

    async create(payload: CreateTransferPayload): Promise<Transfer> {
        return this.client.request({
        method: "POST",
        url: "/transfers",
        data: payload,
        });
    }

    async get(id: string): Promise<Transfer> {
        return this.client.request({
        method: "GET",
        url: `/transfers/${encodeURIComponent(id)}`,
        });
    }
}
