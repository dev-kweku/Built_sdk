import { BuiltClient, BuiltClientOptions } from "./core/BuiltClient";
import { Invoices } from "./modules/Invoices";
import { SalesOrders } from "./modules/SalesOrders";
import { Deposits } from "./modules/Deposits";
import { QuickSales } from "./modules/QuickSales";
import { OtherIncomes } from "./modules/OtherIncomes";

export class BuiltSDK {
    public invoices: Invoices;
    public salesOrders: SalesOrders;
    public deposits: Deposits;
    public quickSales: QuickSales;
    public otherIncomes: OtherIncomes;
    private client: BuiltClient;

    constructor(options: BuiltClientOptions) {
    this.client = new BuiltClient(options);
    this.invoices = new Invoices(this.client);
    this.salesOrders = new SalesOrders(this.client);
    this.deposits = new Deposits(this.client);
    this.quickSales = new QuickSales(this.client);
    this.otherIncomes = new OtherIncomes(this.client);
    }
}

export default BuiltSDK;
