import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/UserItem.module.css';

const UserItem = ({ user }) => (
  <div className={styles.userItem}>
    {user.name}
  </div>
);

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItem;