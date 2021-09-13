import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
  
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'New Bedsheet',
      amount: 4.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'Lemon', 
      amount: 99.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'New Table',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  

 const addExpenseHandler = (expense)=> {
  setExpenses((prevExpenses)=>{
    return [expense, ...prevExpenses]
  });
 }
  return (
    <div>
      <h1 style={{textAlign:'center',color:'#fff'}}>Dynamic Expense App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
