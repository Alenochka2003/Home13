import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

const Filter = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Filter users..."
        onChange={handleFilterChange}
        className={styles.filterInput}
      />
    </div>
  );
};

const mapDispatchToProps = {
  setFilter,
};


export default connect(null, mapDispatchToProps)(Filter);

