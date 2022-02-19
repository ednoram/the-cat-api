import { toast } from "react-toastify";
import { Dispatch } from "@reduxjs/toolkit";

import { IImage } from "types/index";
import { api, createAction } from "utils/index";

import {
  SET_PAGE,
  FETCH_IMAGES_START,
  FETCH_IMAGES_ERROR,
  FETCH_IMAGES_SUCCESS,
} from "../reducers/images";

const fetchImagesSuccess = (images: IImage[], categoryId: number | null) =>
  createAction(FETCH_IMAGES_SUCCESS, { images, categoryId });
const fetchImagesStart = () => createAction(FETCH_IMAGES_START, {});
const fetchImagesError = () => createAction(FETCH_IMAGES_ERROR, {});

export const setPage = (page: number) => createAction(SET_PAGE, { page });

export const fetchImages =
  ({
    page,
    limit,
    categoryId,
  }: {
    limit: number;
    page: number;
    categoryId: number;
  }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(fetchImagesStart());

      const { data } = await api.get("/images/search", {
        params: { page, limit, category_ids: [categoryId] },
      });

      dispatch(fetchImagesSuccess(data, categoryId));
    } catch (err) {
      dispatch(fetchImagesError());
      toast.error("Error occurred while trying to fetch images");
    }
  };
