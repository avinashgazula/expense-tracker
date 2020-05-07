import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = (props) => {

    const { deleteTransaction } = useContext(GlobalContext);


    const transaction = props.transaction;
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <React.Fragment>
            <li className={sign==='-' ? 'minus' : 'plus'}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </React.Fragment>
    )
}
