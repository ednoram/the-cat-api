import { AnyAction } from "redux";

import { IImage } from "types/index";

export const SET_PAGE = "SET_PAGE";
export const FETCH_IMAGES_START = "FETCH_IMAGES_START";
export const FETCH_IMAGES_ERROR = "FETCH_IMAGES_ERROR";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";

export interface IImagesState {
  page: number;
  limit: number;
  images: IImage[];
  loading: boolean;
  categoryId: number | null;
}

const INITIAL_STATE: IImagesState = {
  page: 1,
  limit: 9,
  images: [],
  loading: false,
  categoryId: null,
};

const imagesReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case FETCH_IMAGES_SUCCESS: {
      return {
        ...state,
        loading: false,
        categoryId: payload.categoryId,
        images:
          payload.categoryId === state.categoryId
            ? [...state.images, ...payload.images]
            : payload.images,
      };
    }

    case FETCH_IMAGES_START: {
      return { ...state, loading: true };
    }

    case FETCH_IMAGES_ERROR: {
      return { ...state, loading: false };
    }

    case SET_PAGE: {
      return { ...state, page: payload.page };
    }

    default: {
      return state;
    }
  }
};

export default imagesReducer;
