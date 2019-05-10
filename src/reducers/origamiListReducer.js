import {ORIGAMI_LIST_PULL} from "../constants/bodyConstants";

export const origamiListReducer = (listState = [], action) => {
    switch (action.type) {
        case ORIGAMI_LIST_PULL: {
            listState = action.payload;
            return listState;
            break;
        }
        default: {
            return listState;
        }
    }
    return listState;
};