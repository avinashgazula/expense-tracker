const Transaction = require('../models/Transaction');
const mongoose = require('mongoose');

// @route GET /api/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

// @route POST /api/transactions
exports.addTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            transaction: transaction,
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(
                (item) => item.message
            );
            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(404).json({
                success: false,
                error: 'Server error',
            });
        }
    }
};

// @route DELETE /api/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
    const transaction = Transaction.findById(req.params.id);

    if (!transaction) {
        return res.status(500).json({
            success: false,
            error: 'No transaction found',
        });
    }

    await transaction.deleteOne();
    return res.status(200).json({
        success: true,
        data: {},
    });
};
