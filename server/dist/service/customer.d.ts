declare function CreateCustomer(customer: any): Promise<void>;
declare function GetCustomers(): Promise<{
    name: string;
    createdAt: Date;
    updatedAt: Date;
    id: number;
}[]>;
declare function GetCustomer(id: any): Promise<{
    name: string;
    email: string;
    phone: string | null;
    address: string | null;
    createdAt: Date;
    updatedAt: Date;
    id: number;
} | null>;
export { CreateCustomer, GetCustomer, GetCustomers, };
//# sourceMappingURL=customer.d.ts.map