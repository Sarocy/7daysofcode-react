import React, { useState, useEffect } from "react";
import Global from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";


const App = () => {

    const [transactionsList, setTransactionsList] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amounts = transactionsList.map(({ amount, expense }) => ({
            amount: Number(amount),
            expense
        }));

        const totalIncome = amounts.filter(({ expense }) => !expense)
            .reduce((acc, { amount }) => acc + amount, 0).toFixed(2);
        
        const totalExpense = amounts.filter(({ expense }) => expense)
            .reduce((acc, { amount }) => acc + amount, 0).toFixed(2);

        setIncome(`R$ ${totalIncome}`);
        setExpense(`R$ ${totalExpense}`);
        setTotal(`${Number(totalIncome) < Number(totalExpense) ? "-" : ""}R$ ${Math.abs(totalIncome - totalExpense).toFixed(2)}`);
    }, [transactionsList]);

    const handleAdd = (transaction) => {
        const updatedTransactions = [...transactionsList, transaction];
        setTransactionsList(updatedTransactions);
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    };


    return (
        <>
            <Global />
            <Header />
            <Resume income={income} expense={expense} total={total} /> 
            <Form handleAdd={handleAdd} />
        </>
         
    );
};

export default App;
