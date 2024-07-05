
// import React from 'react';
// import { connect } from 'react-redux';
// import { setFilter } from '../redux/actions';
// import UserItem from './UserItem';
// import styles from '../styles/UserList.module.css';

// const UserList = ({ users, filter, setFilter }) => {
//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={styles.userList}>
//       {filteredUsers.map(user => (
//         <UserItem key={user.id} user={user} />
//       ))}
     
//       <button onClick={() => setFilter('Filter by ...')}>
//         Filter by ...
//       </button>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   users: state.users,
//   filter: state.filter,
// });


// export default connect(mapStateToProps, { setFilter })(UserList);

import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import UserItem from './UserItem';
import styles from '../styles/UserList.module.css';

const UserList = ({ users, filter, setFilter }) => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.userList}>
      {filteredUsers.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
      <button onClick={() => setFilter('')}>
        Clear Filter
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(UserList);