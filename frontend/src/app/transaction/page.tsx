import React, { useState } from 'react';

interface TransactionFormProps {
    onSubmit: (transaction: Transaction) => void;
}

interface Transaction {
    transaction_id: string;
    invoice_number: string;
    total_price: number;
    status: string;
    created_at: string;
    user_id: string;
    voucher_id: string;
    shipping_address: string;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
    const [transaction, setTransaction] = useState<Transaction>({
        transaction_id: '',
        invoice_number: '',
        total_price: 0,
        status: '',
        created_at: '',
        user_id: '',
        voucher_id: '',
        shipping_address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(transaction);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Transaction ID:
                <input
                    type="text"
                    name="transaction_id"
                    value={transaction.transaction_id}
                    onChange={handleChange}
                />
            </label>
            <label>
                Invoice Number:
                <input
                    type="text"
                    name="invoice_number"
                    value={transaction.invoice_number}
                    onChange={handleChange}
                />
            </label>
            <label>
                Total Price:
                <input
                    type="number"
                    name="total_price"
                    value={transaction.total_price}
                    onChange={handleChange}
                />
            </label>
            <label>
                Status:
                <input
                    type="text"
                    name="status"
                    value={transaction.status}
                    onChange={handleChange}
                />
            </label>
            <label>
                Created At:
                <input
                    type="text"
                    name="created_at"
                    value={transaction.created_at}
                    onChange={handleChange}
                />
            </label>
            <label>
                User ID:
                <input
                    type="text"
                    name="user_id"
                    value={transaction.user_id}
                    onChange={handleChange}
                />
            </label>
            <label>
                Voucher ID:
                <input
                    type="text"
                    name="voucher_id"
                    value={transaction.voucher_id}
                    onChange={handleChange}
                />
            </label>
            <label>
                Shipping Address:
                <input
                    type="text"
                    name="shipping_address"
                    value={transaction.shipping_address}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TransactionForm;