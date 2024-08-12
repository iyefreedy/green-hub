import React from 'react';
const VoucherForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="voucherId">Voucher ID:</label>
            <input type="text" id="voucherId" />

            <label htmlFor="voucherName">Voucher Name:</label>
            <input type="text" id="voucherName" />

            <label htmlFor="voucherStartDate">Voucher Start Date:</label>
            <input type="date" id="voucherStartDate" />

            <label htmlFor="voucherEndDate">Voucher End Date:</label>
            <input type="date" id="voucherEndDate" />

            <label htmlFor="sellerId">Seller ID:</label>
            <input type="text" id="sellerId" />

            <button type="submit">Submit</button>
        </form>
    );
};

export default VoucherForm;
