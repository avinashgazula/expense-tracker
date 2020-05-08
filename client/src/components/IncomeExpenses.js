import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const incomes = amounts.filter(amount => amount > 0).reduce((sum, current) => sum + current, 0).toFixed(2);
    const expenses = amounts.filter(amount => amount < 0).reduce((sum, current) => sum + current, 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${numberWithCommas(incomes)}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">${numberWithCommas(Math.abs(expenses))}</p>
            </div>
            
        </div>
    )
}
