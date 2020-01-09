import { combineReducers } from 'redux';

const INITIAL_STATE:NETWORKSTATE = {
  loading:false
};
export type NETWORKSTATE={
    loading:boolean
}
interface action{
    type: actions;
    payload: any;
}
enum actions{
    CHANGE_STATE
}
const friendReducer = (state = INITIAL_STATE, action:action) => {
  switch (action.type) {
    case actions.CHANGE_STATE:
        state.loading=action.payload;
        return state;
    default:
      return state
  }
};
export const setLoading = (isLoading:boolean)=> (
    {
      type: actions.CHANGE_STATE,
      payload: isLoading,
    }
  );
export default combineReducers({
  network: friendReducer,
});