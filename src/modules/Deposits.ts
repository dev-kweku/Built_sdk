    import { BuiltClient } from "../core/BuiltClient";
    import {
    Deposit,
    CreateDepositPayload,
    UpdateDepositPayload,
    LinkDepositPayload,
    UnlinkDepositPayload,
    } from "../types/deposits";
    import { PaginatedResult } from "../types/common";

    export class Deposits {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<Deposit>> {
        return this.client.request({
        method: "GET",
        url: "/deposits",
        params,
        });
    }

    async create(payload: CreateDepositPayload): Promise<Deposit> {
        return this.client.request({
        method: "POST",
        url: "/deposits",
        data: payload,
        });
    }

    async get(id: string): Promise<Deposit> {
        return this.client.request({
        method: "GET",
        url: `/deposits/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdateDepositPayload): Promise<Deposit> {
        return this.client.request({
        method: "POST",
        url: `/deposits/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/deposits/${encodeURIComponent(id)}`,
        });
    }

    async link(payload: LinkDepositPayload) {
        return this.client.request({
        method: "POST",
        url: "/deposits/link",
        data: payload,
        });
    }

    async unlink(payload: UnlinkDepositPayload) {
        return this.client.request({
        method: "POST",
        url: "/deposits/unlink",
        data: payload,
        });
    }
    }
