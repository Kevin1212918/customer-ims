import { useState } from 'react';
import './App.css';
import CreateCustomer from './createCustomer';
import GetCustomers from './getCustomers';
import GetCustomer from './getCustomer';

const Page = {
    GET_CUSTOMERS: 0,
    CREATE_CUSTOMER: 1,
    GET_CUSTOMER: 2,
};

function App() {
    const [curPage, setCurPage] = useState(Page.GET_CUSTOMERS);
    return (
        <div className="App">
            <Navbar setCurPage={setCurPage} /> 
            <Body curPage={curPage}/>
        </div>
    );
}

function Navbar(props) {
    function onClick(page) { return () => {
        props.setCurPage(page);
    };}
    return (
        <nav>
            <button onClick={onClick(Page.GET_CUSTOMERS)}>Show customers</button>
            <button onClick={onClick(Page.CREATE_CUSTOMER)}>Create a customer</button>
            <button onClick={onClick(Page.GET_CUSTOMER)}>Find a customer</button>
        </nav>
    );
}

function Body(props) {
    switch (props.curPage) {
        case Page.GET_CUSTOMERS:
            return <GetCustomers />;
        case Page.CREATE_CUSTOMER:
            return <CreateCustomer />;
        case Page.GET_CUSTOMER:
            return <GetCustomer />;
        default:
            console.log(`Invalid page: ${props.curPage}`)
            return <div>error</div>
    }
}

export default App;