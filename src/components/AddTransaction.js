import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text.."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (income-postive, expense-negative)</label>
                    <input type="text" placeholder="Enter Amount..."/>
                </div>
            </form>
            <button className="btn">Add Transaction</button>
        </div>
    )
}
