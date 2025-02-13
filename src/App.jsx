import React, { useState } from "react";
import Global from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Grid from "./components/Grid";

const App = () => {
    const [transactionsList, setTransactionsList] = useState(
        JSON.parse(localStorage.getItem("transactions")) || []
    );

    const totalIncome = transactionsList.filter(t => !t.expense).reduce((acc, t) => acc + Number(t.amount), 0);
    const totalExpense = transactionsList.filter(t => t.expense).reduce((acc, t) => acc + Number(t.amount), 0);
    const total = totalIncome - totalExpense;

    const handleAdd = (transaction) => {
        const updatedTransactions = [...transactionsList, transaction];
        setTransactionsList(updatedTransactions);
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    };

    const handleDelete = (id) => {
        const newArray = transactionsList.filter(transaction => transaction.id !== id);
        setTransactionsList(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

    return (
        <>
            <Global />
            <Header />
            <Resume 
                income={`R$ ${totalIncome.toFixed(2)}`} 
                expense={`R$ ${totalExpense.toFixed(2)}`} 
                total={`R$ ${total.toFixed(2)}`} 
            />
            <Form handleAdd={handleAdd} />
            <Grid itens={transactionsList} onDelete={handleDelete} />
        </>
    );
};

export default App;

