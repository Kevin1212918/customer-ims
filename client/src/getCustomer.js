import { useState } from 'react';
import { SERVER_API_URL } from './util';
export default function GetCustomer() {
  const [isLoading, setIsLoading] = useState(false);
  const [customer, setCustomer] = useState(null);
  if (isLoading) {
    return (
      <div>
        <SearchCustomer setCustomer={setCustomer} setIsLoading={setIsLoading} />
        Loading...
      </div>
    )
  }
  return (
    <div>
      <SearchCustomer setCustomer={setCustomer} setIsLoading={setIsLoading} />
      <CustomerDetail customer={customer} />
    </div>
  );
}

function CustomerDetail(props) {
  const customer = props.customer;
  if (customer === null) {
    return (
      <div>
        Customer not found!
      </div>
    )
  }

  return (
    <>
      <ul>
        <li>ID: {customer.id}</li>
        <li>Name: {customer.name}</li>
        <li>Email: {customer.email}</li>
        <li>Address: {customer.address}</li>
        <li>Last updated: {new Date(customer.updatedAt).toLocaleString("en-US")}</li>
        <li>Created on: {new Date(customer.createdAt).toLocaleString("en-US")}</li>
      </ul>
    </>
  );


}
function SearchCustomer(props) {
  function search(id_string) {
    if (id_string === "") {
      return;
    }
    const id = Number(id_string);
    if (isNaN(id)) {
      return;
    }
    props.setIsLoading(true);
    fetch(`${SERVER_API_URL}/customer/${id}`, { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          props.setCustomer(result);
        },
        (error) => {
          props.setCustomer(null)
          console.log(`fetch failed: ${error}`);
        }
      )
      .then(
        () => { props.setIsLoading(false); }
      );
  }

  return (
    <div>
      <label>Customer ID: </label>
      <input onChange={e => search(e.target.value)} />
    </div>
  )
}
