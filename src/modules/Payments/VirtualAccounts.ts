    import { BuiltClient } from "../../core/BuiltClient";
    import { VirtualAccount, CreateVirtualAccountPayload } from "../../types/virtualAccounts";
    import { PaginatedResult } from "../../types/common";

    export class VirtualAccounts {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<VirtualAccount>> {
        return this.client.request({
        method: "GET",
        url: "/virtual-accounts",
        params,
        });
    }

    async create(payload: CreateVirtualAccountPayload): Promise<VirtualAccount> {
        return this.client.request({
        method: "POST",
        url: "/virtual-accounts",
        data: payload,
        });
    }

    async get(id: string): Promise<VirtualAccount> {
        return this.client.request({
        method: "GET",
        url: `/virtual-accounts/${encodeURIComponent(id)}`,
        });
    }

    async close(id: string): Promise<any> {
        return this.client.request({
        method: "POST",
        url: `/virtual-accounts/${encodeURIComponent(id)}/close`,
        });
    }
    }
