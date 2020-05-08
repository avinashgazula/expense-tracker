import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas} from '../utils/format'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((sum, current) => sum + current, 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${numberWithCommas(total)}</h1>
        </div>
    )
}
