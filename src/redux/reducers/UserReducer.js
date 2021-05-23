import { SET_USER } from "../actions/types";

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            {
                return action.payload;
            }
        default:
            {
                return state;
            }
    }
};

export default userReducer;