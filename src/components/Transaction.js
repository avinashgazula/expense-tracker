import React from 'react'

export const Transaction = (props) => {
    const transaction = props.transaction;
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <React.Fragment>
            <li className={sign==='-' ? 'minus' : 'plus'}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn">x</button>
            </li>
        </React.Fragment>
    )
}
