import {
  ERROR,
  LOADER,
  SAVE_PRODUCTS,
  SELECT_PRODUCT,
} from "../constant/constant";

export const intialState = {
  productList: [],
  selectedProduct: null,
  loader: false,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADER:
      return {
        ...state,
        loader: payload,
      };
    case SAVE_PRODUCTS:
      return {
        ...state,
        productList: payload,
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
