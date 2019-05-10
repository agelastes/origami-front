import {ORIGAMI_LIST_PULL} from "../constants/bodyConstants";

export const getOrigamiList = (origamiList) => {
  return {
      type: ORIGAMI_LIST_PULL,
      payload: origamiList
  }
};