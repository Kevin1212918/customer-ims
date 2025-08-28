import { useState } from 'react';
export default function CreateCustomer() {
    async function submit(formData) {
        fetch("http://localhost:5433/api/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                address: formData.get("address"),
            }),
        })
        .then(
            (result) => {
                console.log(`create success`);
            },
            (error) => { 
                console.log(`fetch failed: ${error}`);
            }
        );
    }
    return (
        <form action={submit}>
            <label htmlFor="name">Name: </label> 
            <input name="name" /><br/>
            <label htmlFor="email">Email: </label>
            <input name="email" /><br/>
            <label htmlFor="phone">Phone: </label>
            <input name="phone" /><br/>
            <label htmlFor="address">Address: </label>
            <input name="address" /><br/>
            <button type="submit">New customer</button>
        </form>
    );
}

