import { AnyAction } from "redux";

import { IImage } from "types/index";

export const FETCH_IMAGES_START = "FETCH_IMAGES_START";
export const FETCH_IMAGES_ERROR = "FETCH_IMAGES_ERROR";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";

export interface IImagesState {
  images: IImage[];
  loading: boolean;
}

const INITIAL_STATE: IImagesState = {
  images: [],
  loading: false,
};

const imagesReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case FETCH_IMAGES_SUCCESS: {
      return { ...state, images: payload.images, loading: false };
    }

    case FETCH_IMAGES_START: {
      return { ...state, loading: true };
    }

    case FETCH_IMAGES_ERROR: {
      return { ...state, loading: false };
    }

    default: {
      return state;
    }
  }
};

export default imagesReducer;
