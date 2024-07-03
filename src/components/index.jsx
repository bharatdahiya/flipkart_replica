import React, { useEffect, useReducer } from "react";
import Header from "./common/Header/Header";
import ProductList from "./containers/ProductsList/ProductList";
import ReviewSection from "./containers/Review/Review";
import { reducer, intialState } from "../reducer/reducer";
import { LOADER, SAVE_PRODUCTS, ERROR } from "../constant/constant";
import Loader from "./common/Loader/Loader";
import "../App.css";
import ErrorDialog from "./common/ErrorDialog/ErrorDialog";

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch({ type: LOADER, payload: true });
    fetch("https://65e60da8d7f0758a76e8083a.mockapi.io/api/products")
      .then((res) => res.json())
      .then((response) => {
        if (response.length) {
          dispatch({ type: SAVE_PRODUCTS, payload: response });
          dispatch({ type: LOADER, payload: false });
        } else {
          dispatch({ type: ERROR, payload: true });
          dispatch({ type: LOADER, payload: false });
        }
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err });
        dispatch({ type: LOADER, payload: false });
      });
  };
  console.log(state.error);
  return (
    <>
      <Header />
      <main
        className={`main ${
          state.selectedProduct ? "productWithReview" : "productList"
        } ${state.loader ? "loader" : ""} ${state.error ? "error" : ""}`}
      >
        {state.loader && !state.error ? (
          <Loader />
        ) : (
          <>
            {state?.productList?.length > 0 && (
              <ProductList
                selectedProduct={state?.selectedProduct}
                productsList={state?.productList}
                dispatch={dispatch}
              />
            )}
            {state.selectedProduct && (
              <ReviewSection
                details={state.selectedProduct}
                dispatch={dispatch}
              />
            )}
          </>
        )}

        {state.error && (
          <ErrorDialog
            dispatch={() => {
              dispatch({ type: ERROR, payload: false });
              fetchData();
            }}
          />
        )}
      </main>
    </>
  );
};

export default HomePage;
