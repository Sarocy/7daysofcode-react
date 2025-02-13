import React, {useState} from 'react'
import * as C from "./styles"

const Form = ({handleAdd}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount ] = useState("");
    const [date, setDate] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random()*1000);

    const handleSave = () => {
        if(!desc || !amount || !date){
            alert("Informe a data, descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            date: date,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount ("");
        setDate("");
    };

    return(
        <>
            <C.Container>
                <C.Content>
                    <C.InputContent>
                        <C.Label>Data</C.Label>
                        <C.Input
                            value={date}
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </C.InputContent>

                    <C.InputContent>
                        <C.Label>Categoria</C.Label>
                        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </C.InputContent>

                    <C.InputContent>
                        <C.Label>Valor</C.Label>
                        <C.Input 
                        value={amount}
                        type='number'
                        onChange={(e) => setAmount (e.target.value)}
                        />
                    </C.InputContent>
                    
                    <C.Button onClick={handleSave}>ADICIONAR</C.Button>
                </C.Content>

                <C.RadioGroupWrapper>
                <C.RadioGroup>
                    <C.Input
                        type='radio'
                        id='rIncome'
                        defaultChecked
                        name='group1'
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor='rIncome'>Entrada</C.Label>
                    <C.Input 
                        type='radio'
                        id='rExpenses'
                        name='group1'
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.Label htmlFor='rExpenses'>Saída</C.Label>
                </C.RadioGroup>
                </C.RadioGroupWrapper>
                
            </C.Container>
        </>
    )
}

export default Form;