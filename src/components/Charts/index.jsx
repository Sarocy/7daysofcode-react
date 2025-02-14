import React, { useState, useEffect } from "react";
import { 
    PieChart, Pie, Cell, Tooltip, Legend, 
    LineChart, Line, XAxis, YAxis, CartesianGrid, 
    BarChart, Bar 
} from "recharts";
import * as C from "./styles";

// Hook customizado para gerenciar o tamanho dos gráficos
const useChartSize = () => {
    const [chartSize, setChartSize] = useState({
        width: window.innerWidth < 768 ? window.innerWidth * 0.7 : window.innerWidth * 0.6,
        height: window.innerHeight * 0.4,
        outerRadius: window.innerWidth < 768 ? window.innerWidth * 0.12 : window.innerWidth * 0.065,
        innerRadius: window.innerWidth < 768 ? window.innerWidth * 0.05 : window.innerWidth * 0.03,
        barSize: window.innerWidth * 0.03,
    });

    useEffect(() => {
        const handleResize = () => {
            setChartSize({
                width: window.innerWidth < 768 ? window.innerWidth * 0.7 : window.innerWidth * 0.6,
                height: window.innerHeight * 0.4,
                outerRadius: window.innerWidth < 768 ? window.innerWidth * 0.12 : window.innerWidth * 0.065,
                innerRadius: window.innerWidth < 768 ? window.innerWidth * 0.05 : window.innerWidth * 0.03,
                barSize: window.innerWidth * 0.03,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return chartSize;
};

const Charts = ({ transactionsList }) => {
    const chartSize = useChartSize();

    // Separar receitas e despesas em um único loop
    const { totalIncome, totalExpense, expenseTransactions } = transactionsList.reduce(
        (acc, transaction) => {
            if (transaction.expense) {
                acc.totalExpense += Number(transaction.amount);
                acc.expenseTransactions.push(transaction);
            } else {
                acc.totalIncome += Number(transaction.amount);
            }
            return acc;
        },
        { totalIncome: 0, totalExpense: 0, expenseTransactions: [] }
    );

    // Agrupar despesas por categoria
    const categories = expenseTransactions.reduce((acc, transaction) => {
        const category = transaction.desc;
        acc[category] = (acc[category] || 0) + Number(transaction.amount);
        return acc;
    }, {});

    // Criar dados do gráfico de pizza e barras
    const pieData = Object.entries(categories).map(([key, value]) => ({ name: key, value }));
    const barData = Object.entries(categories).map(([key, value]) => ({ category: key, amount: value }));

    // Criar dados do gráfico de linha (evolução do saldo)
    let accumulatedBalance = 0;
    const lineData = transactionsList
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((transaction) => {
            accumulatedBalance += transaction.expense ? -Number(transaction.amount) : Number(transaction.amount);
            return { date: transaction.date, saldo: accumulatedBalance };
        });

    const COLORS = ["#1A5755", "#3E8987", "#46D1CD", "#65889D", "#D9D9D9"];

    return (
        <C.Container>
            <C.ChartBox>
                <h3>Maiores despesas em porcentagem</h3>
                <PieChart width={chartSize.width} height={chartSize.height}>
                    <Pie 
                        data={pieData} 
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={chartSize.outerRadius} 
                        innerRadius={chartSize.innerRadius} 
                    >
                        {pieData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" align="center" verticalAlign="bottom" />
                </PieChart>
            </C.ChartBox>

            <C.ChartBox>
                <h3>Evolução do saldo</h3>
                <LineChart width={chartSize.width / 2} height={chartSize.height} data={lineData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="saldo" stroke="#46D1CD" strokeWidth={2} dot={{ r: 3 }} />
                    <Tooltip />
                </LineChart>
            </C.ChartBox>

            <C.ChartBox fullWidth>
                <h3>Despesas por categoria</h3>
                <BarChart width={chartSize.width} height={chartSize.height} data={barData}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="amount" fill="#3E8987" barSize={chartSize.barSize} />
                    <Tooltip />
                </BarChart>
            </C.ChartBox>
        </C.Container>
    );
};

export default Charts;

