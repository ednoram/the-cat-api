import { IState } from "types/index";
import { createSelector } from "@reduxjs/toolkit";

export const selectImagesState = (state: IState) => state.images;

export const selectPaginationParams = createSelector(
  selectImagesState,
  ({ limit, page }) => ({ limit, page })
);
