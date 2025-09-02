import { useEffect, useState } from 'react';
import { SERVER_API_URL } from './util';
export default function GetCustomers() {
  const [isLoading, setIsLoading] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_API_URL}/customers`, { method: "GET" })
      .then(res => res.json())
      .then(
        (result) => {
          setCustomers(result);
        },
        (error) => {
          console.log(`fetch failed: ${error}`);
        }
      ).then(
        () => { setIsLoading(false); }
      );
  }, [])

  if (isLoading) {
    return (
      <div>Loading ...</div>
    )
  }
  if (customers.length === 0) {
    return (
      <div>Create a customer first!</div>
    )
  }

  const customerOverviews = customers.map((customer) => {
    return <CustomerOverview customer={customer} />
  })

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {customerOverviews}
      </tbody>
    </table>
  );
}

function CustomerOverview(props) {
  const customer = props.customer;
  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.name}</td>
      <td>{new Date(customer.updatedAt).toLocaleString("en-US")}</td>
    </tr>
  )
}
