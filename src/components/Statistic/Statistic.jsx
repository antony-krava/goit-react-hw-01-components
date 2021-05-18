import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ title, stats }) => {
    const markup = stats.map(({ id, label, percentage }) => (
        <li className={styles.item} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>
    ));
    return (
        <div className={styles.statistic}>
            {title && (<h2 className={styles.title}>{title}</h2>)}
            <ul className={styles.statisticList}>
                {markup}
            </ul>
        </div>
    )
};

Statistic.defaultProps = {
    stats: [],
};

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Statistic;