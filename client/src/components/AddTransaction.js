import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text: text,
            amount: +amount,
        };

        addTransaction(newTransaction);
    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Enter text.."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br /> (income-postive, expense-negative)
                    </label>
                    <input
                        type="text"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </div>
                <button className="btn" type="submit">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}
