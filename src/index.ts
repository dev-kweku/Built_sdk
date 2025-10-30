    import { BuiltClient, BuiltClientOptions } from "./core/BuiltClient";
    import {
    Invoices,
    SalesOrders,
    Deposits,
    QuickSales,
    OtherIncomes,
    PaidExpenses,
    Bills,
    IncomeTaxes,
    WithholdingTaxes,
    SalesTaxes,
    Suppliers,
    } from "./modules";

    export class BuiltSDK {
    public invoices: Invoices;
    public salesOrders: SalesOrders;
    public deposits: Deposits;
    public quickSales: QuickSales;
    public otherIncomes: OtherIncomes;
    public paidExpenses: PaidExpenses;
    public bills: Bills;
    public incomeTaxes: IncomeTaxes;
    public withholdingTaxes: WithholdingTaxes;
    public salesTaxes: SalesTaxes;
    public suppliers: Suppliers;
    private client: BuiltClient;

    constructor(options: BuiltClientOptions) {
        this.client = new BuiltClient(options);
        this.invoices = new Invoices(this.client);
        this.salesOrders = new SalesOrders(this.client);
        this.deposits = new Deposits(this.client);
        this.quickSales = new QuickSales(this.client);
        this.otherIncomes = new OtherIncomes(this.client);
        this.paidExpenses = new PaidExpenses(this.client);
        this.bills = new Bills(this.client);
        this.incomeTaxes = new IncomeTaxes(this.client);
        this.withholdingTaxes = new WithholdingTaxes(this.client);
        this.salesTaxes = new SalesTaxes(this.client);
        this.suppliers = new Suppliers(this.client);
    }
    }

    export default BuiltSDK;
