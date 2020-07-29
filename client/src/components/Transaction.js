import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const transaction = props.transaction;
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <React.Fragment>
            <li className={sign === '-' ? 'minus' : 'plus'}>
                {transaction.text}{' '}
                <span>
                    {sign}${numberWithCommas(Math.abs(transaction.amount))}
                </span>
                <button
                    onClick={() => deleteTransaction(transaction._id)}
                    className="delete-btn">
                    x
                </button>
            </li>
        </React.Fragment>
    );
};
