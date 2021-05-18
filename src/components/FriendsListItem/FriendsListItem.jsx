import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';

const FriendsListItem = ({ name, avatar, isOnline }) => (
    <li className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>
);

FriendsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
};

export default FriendsListItem;