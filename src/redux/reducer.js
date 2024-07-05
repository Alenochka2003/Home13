// const initialState = {
//   users: [
//     { id: 1, name: 'Vasya' },
//     { id: 2, name: 'Alena' },
//     { id: 3, name: 'Olga' },
//     { id: 4, name: 'Ravil' },
//     { id: 5, name: 'Oleg' }
    
//   ],
//   filter: '',
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_FILTER':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

const initialState = {
  users: [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Alena' },
    { id: 3, name: 'Olga' },
    { id: 4, name: 'Ravil' },
    { id: 5, name: 'Oleg' }
  ],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;