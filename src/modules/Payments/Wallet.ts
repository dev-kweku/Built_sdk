import { BuiltClient } from "../../core/BuiltClient";
import { WalletBalance, WalletTransaction, WalletTransactionsParams } from "../../types/wallet";
import { PaginatedResult } from "../../types/common";

export class Wallet {
    constructor(private client: BuiltClient) {}

    async getBalance(): Promise<WalletBalance> {
        return this.client.request<WalletBalance>({
        method: "GET",
        url: "/wallet",
        });
    }

    async transactions(params?: WalletTransactionsParams): Promise<PaginatedResult<WalletTransaction>> {
        return this.client.request<PaginatedResult<WalletTransaction>>({
        method: "GET",
        url: "/wallet/transactions",
        params,
        });
    }
    }
