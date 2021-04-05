import { types } from "../types/types";

export const LogReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return { log: true };
    case types.logout:
      return { log: false };
    default:
      return state;
  }
};
