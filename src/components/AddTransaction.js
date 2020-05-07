import React, { useState } from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(event)=>setText(event.target.value)} placeholder="Enter text.."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (income-postive, expense-negative)</label>
                    <input type="text" value={amount} onChange={(event) => setAmount(event.target.value)}/>
                </div>
            </form>
            <button className="btn">Add Transaction</button>
        </div>
    )
}
