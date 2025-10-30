    import { BuiltClient } from "../core/BuiltClient";
    import {
    SalesOrder,
    CreateSalesOrderPayload,
    UpdateSalesOrderPayload,
    ShareSalesOrderPayload,
    } from "../types/salesOrders";
    import { PaginatedResult } from "../types/common";

    export class SalesOrders {
    constructor(private client: BuiltClient) {}

    async list(params?: Record<string, any>): Promise<PaginatedResult<SalesOrder>> {
        return this.client.request({
        method: "GET",
        url: "/sales-orders",
        params,
        });
    }

    async create(payload: CreateSalesOrderPayload): Promise<SalesOrder> {
        return this.client.request({
        method: "POST",
        url: "/sales-orders",
        data: payload,
        });
    }

    async get(id: string): Promise<SalesOrder> {
        return this.client.request({
        method: "GET",
        url: `/sales-orders/${encodeURIComponent(id)}`,
        });
    }

    async update(id: string, payload: UpdateSalesOrderPayload): Promise<SalesOrder> {
        return this.client.request({
        method: "POST",
        url: `/sales-orders/${encodeURIComponent(id)}`,
        data: payload,
        });
    }

    async delete(id: string): Promise<void> {
        await this.client.request({
        method: "DELETE",
        url: `/sales-orders/${encodeURIComponent(id)}`,
        });
    }

    async convertToInvoice(orderId: string): Promise<any> {
        return this.client.request({
        method: "POST",
        url: `/sales-orders/${encodeURIComponent(orderId)}/convert-to-invoice`,
        });
    }

    async share(payload: ShareSalesOrderPayload) {
        return this.client.request({
        method: "POST",
        url: "/sales-orders/share",
        data: payload,
        });
    }
    }
