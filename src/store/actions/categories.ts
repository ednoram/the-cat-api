import { toast } from "react-toastify";
import { Dispatch } from "@reduxjs/toolkit";

import { ICategory } from "types/index";
import { api, createAction } from "utils/index";

import {
  SET_ACTIVE_CATEGORY_ID,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_SUCCESS,
} from "../reducers/categories";

const fetchCategoriesSuccess = (categories: ICategory[]) =>
  createAction(FETCH_CATEGORIES_SUCCESS, { categories });
const fetchCategoriesStart = () => createAction(FETCH_CATEGORIES_START, {});
const fetchCategoriesError = () => createAction(FETCH_CATEGORIES_ERROR, {});

export const setActiveCategoryId = (id: number) =>
  createAction(SET_ACTIVE_CATEGORY_ID, { id });

export const fetchCategories = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchCategoriesStart());

    const { data } = await api.get("/categories");

    dispatch(fetchCategoriesSuccess(data));
  } catch (err) {
    toast.error("Error occurred while trying to fetch categories");
    dispatch(fetchCategoriesError());
  }
};
