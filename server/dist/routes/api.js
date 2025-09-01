import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const express = __require("express");
const service = __require("../service/customer.js");
const router = express.Router();
router.get('/customers', async function (req, res) {
    const customers = await service.GetCustomers();
    res.send(customers);
});
router.get('/customer/:id', async function (req, res) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.sendStatus(400);
        return;
    }
    const customer = await service.GetCustomer(id);
    if (customer === null) {
        res.sendStatus(404);
        return;
    }
    res.send(customer);
});
router.post('/customers', async function (req, res) {
    const customer = req.body;
    try {
        await service.CreateCustomer(customer);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(400);
        return;
    }
    res.sendStatus(200);
});
export default router;
//# sourceMappingURL=api.js.map