import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses } = useContext(AppContext);
    const [budget, setBudget] = useState(0);
    const maxBudget = 20000;

    // Calcula la suma total de los gastos
    const totalExpenses = expenses.reduce((total, expense) => total + expense.unitprice, 0);

    const handleBudgetChange = (event) => {
        const newBudget = parseFloat(event.target.value);
        const adjustedBudget = Math.max(totalExpenses, Math.min(newBudget, maxBudget));

        dispatch({
            type: 'SET_BUDGET',
            payload: adjustedBudget,
        });
        setBudget(adjustedBudget);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget</span>
            <input
                required
                type='number'
                id='cost'
                value={budget}
                max={maxBudget}
                style={{size: 10}}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;