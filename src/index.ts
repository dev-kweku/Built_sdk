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
    import {Wallet,Topups,Withdrawals,Transfers,PaymentLinks,VirtualAccounts,Pay} from "./modules/Payments"

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
    public payments:{
        wallet: Wallet;
        topups: Topups;
        withdrawals: Withdrawals;
        transfers: Transfers;
        paymentLinks: PaymentLinks;
        virtualAccounts: VirtualAccounts;
        pay: Pay;

    }
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

        this.payments = {
            wallet: new Wallet(this.client),
            topups: new Topups(this.client),
            withdrawals: new Withdrawals(this.client),
            transfers: new Transfers(this.client),
            paymentLinks: new PaymentLinks(this.client),
            virtualAccounts: new VirtualAccounts(this.client),
            pay: new Pay(this.client),
            };
    }
    }

    export default BuiltSDK;
