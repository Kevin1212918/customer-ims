import prisma from "../../generated/prisma/client.js";
import dotenv from 'dotenv';
dotenv.config();
const db = new prisma.PrismaClient();
async function CreateCustomer(customer) {
    await db.customer.create({
        data: {
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
        }
    });
}
async function GetCustomers() {
    const customers = await db.customer.findMany({
        select: {
            id: true,
            name: true,
            updatedAt: true,
            createdAt: true,
        }
    });
    return customers;
}
async function GetCustomer(id) {
    const customer = await db.customer.findUnique({
        where: {
            id: id,
        },
    });
    return customer;
}
export { CreateCustomer, GetCustomer, GetCustomers, };
//# sourceMappingURL=customer.js.map