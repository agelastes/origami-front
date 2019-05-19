import {ORIGAMI_LIST_PULL} from "../constants/bodyConstants";

export const origamiListReducer = (listState = {origami: [], filterOrigami: [], filterStatus: false}, action) => {
    switch (action.type) {
        case ORIGAMI_LIST_PULL: {
            listState = {origami: action.payload, filterOrigami: action.payload, filterStatus: listState.filterStatus};
            return listState;
            break;
        }
        case "ORIGAMI_FILTER": {
            const filterOrigami = listState.origami.filter(origami => origami.category === action.category);
            listState = {origami: listState.origami, filterOrigami: filterOrigami, filterStatus: true};
            console.log("hi", listState, action);
            return listState;
            break;
        }case "ORIGAMI_FILTER_FALSE": {
            listState = {origami: listState.origami, filterOrigami: listState.origami, filterStatus: false};
            return listState;
            break;
        }
        default: {
            return listState;
        }
    }
    return listState;
};