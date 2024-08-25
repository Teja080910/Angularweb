const initialState = {
    gmail: ''
  };
  
  export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'AUTH':
        return {
          ...state,
          Gmail: action?.payload?.gmail
        };
      default:
        return state;
    }
  };
  