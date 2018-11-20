// Filters Reducer - wait for 2 : STATE and ACTIONS

const filtersReducerDefaultState = {
    category: '',
    title: ''
  };

  export default (state = filtersReducerDefaultState, action) => {
      switch (action.type) {
        case 'SORT_BY_CATEGORY':
            return {
                ...state,
                category: action.category
            };
        case 'SORT_BY_TITLE' :
            return {
                ...state,
                title: action.title
            };
        default:
            return state;
      }
  }
