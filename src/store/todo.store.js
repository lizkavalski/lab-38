//reducer
const initialState =[];

export default (state=initialState, action)=> {
    const {payload, type}=action;
    switch (type) {
    case 'ADD':
      //  return state
      return  [...state, payload];
    case 'DELETE':
       // return state
      return [...state.filter( item => item._id !== action.payload )];
    case 'TOGGLE':
        //return state
      return [...state.map( (item) => item._id === action.payload ? {...item, complete: !item.complete} : item ) ];
    case 'DETAILS':
        //return state
      let item = state.filter( item => item._id === action.payload )[0] || []
    return { ...state, showDetails: !state.showDetails, details: item };
    default:
     return state;
  }
}

//action
// if the are issuses try removing the helper functions
export const addItem = (data) => {
    return{type: 'ADD', payload:data};
  };

  export const deleteItem = (data) => {
    return{type:'DELETE', payload:data};
  }

  export const toggleComplete = (data) => {
    return{type: 'TOGGLE', payload:data};
  };

  export const toggleDetails = (data) => {
    return{type: 'DETAILS', payload:data};
  };