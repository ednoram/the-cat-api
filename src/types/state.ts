import { IImagesState } from "store/reducers/images";
import { ICategoriesState } from "store/reducers/categories";

export interface IState {
  images: IImagesState;
  categories: ICategoriesState;
}
