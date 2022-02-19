import { AnyAction } from "redux";

import { ICategory } from "types/index";

export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

export const SET_ACTIVE_CATEGORY_ID = "SET_ACTIVE_CATEGORY_ID";

export interface ICategoriesState {
  categories: ICategory[];
  activeCategoryId: number | null;
}

const INITIAL_STATE: ICategoriesState = {
  categories: [],
  activeCategoryId: null,
};

const categoriesReducer = (
  state = INITIAL_STATE,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: payload.categories,
      };
    }

    case SET_ACTIVE_CATEGORY_ID: {
      return {
        ...state,
        activeCategoryId: payload.id,
      };
    }

    default: {
      return state;
    }
  }
};

export default categoriesReducer;
