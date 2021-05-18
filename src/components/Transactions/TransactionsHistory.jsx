import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';

const TransactionsHistory = ({ items }) => {
    const markup = items.map(({ id, type, amount, currency }) => (
        <tr className={styles.row} key={id}>
            <td className={styles.column}>{type}</td>
            <td className={styles.column}>{amount}</td>
            <td className={styles.column}>{currency}</td>
        </tr>));
    return (
        <table className={styles.transactions}>
            <thead>
                <tr className={styles.row}>
                    <th className={styles.head}>Type</th>
                    <th className={styles.head}>Amount</th>
                    <th className={styles.head}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {markup}
            </tbody>
        </table>
    )
};

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};

export default TransactionsHistory;