import { Dispatch } from "@reduxjs/toolkit";

import { IImage } from "types/index";
import { api, createAction } from "utils/index";

import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_ERROR,
  FETCH_IMAGES_SUCCESS,
} from "../reducers/images";

const fetchImagesSuccess = (images: IImage[]) =>
  createAction(FETCH_IMAGES_SUCCESS, { images });
const fetchImagesStart = () => createAction(FETCH_IMAGES_START, {});
const fetchImagesError = () => createAction(FETCH_IMAGES_ERROR, {});

export const fetchImages = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchImagesStart());

    const { data } = await api.get("/images/search");

    dispatch(fetchImagesSuccess(data));
  } catch (err) {
    dispatch(fetchImagesError());
    // TODO: Add Toast
    console.log(err);
  }
};
