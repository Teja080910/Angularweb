const initialState = {
  gmail: '',
  password:''
  };
  
  export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'AUTH':
        return {
          ...state,
          gmail: action?.payload?.gmail,
          password:action?.payload?.password
        };
      default:
        return state;
    }
  };
  