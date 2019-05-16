import {ORIGAMI_LIST_PULL} from "../constants/bodyConstants";

export const origamiListReducer = (listState = {origami: [], filterOrigami: []}, action) => {
    switch (action.type) {
        case ORIGAMI_LIST_PULL: {
            listState = {origami: action.payload, filterOrigami: action.payload};
            return listState;
            break;
        }
        case "ORIGAMI_FILTER": {
            const filterOrigami = listState.origami.filter(origami => origami.category === action.category);
            listState = {origami: listState.origami, filterOrigami: filterOrigami};
            console.log("hi", listState, action);
            return listState;
            break;
        }
        default: {
            return listState;
        }
    }
    return listState;
};