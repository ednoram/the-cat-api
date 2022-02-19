import { AnyAction } from "redux";

const createAction = (type: string, payload: object): AnyAction => ({
  type,
  payload,
});

export default createAction;
