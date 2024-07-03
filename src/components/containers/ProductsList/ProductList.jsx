import React from "react";
import Card from "../../common/Card/Card";
import { SELECT_PRODUCT } from "../../../constant/constant";
import "./ProductList.css";

const ProductList = ({ selectedProduct, productsList, dispatch }) => {
  return (
    <div style={{ overflowY: "scroll", height: "100vh" }}>
      {(productsList ?? [])?.map((item, index) => {
        return (
          <div key={item.title}>
            <Card
              key={item.title}
              onClick={() => dispatch({ payload: item, type: SELECT_PRODUCT })}
              className={
                item.title === selectedProduct?.title ? "selected" : ""
              }
            >
              <div className="image">
                <img
                  src={item.image
                    .replace("{@width}", "200")
                    .replace("{@height}", "300")
                    .replace("{@quality}", "90")}
                  alt={item.title}
                />
              </div>
              <div className="details">
                <h4>{item.title}</h4>

                {item.subTitle.map((subTitle) => {
                  return <p>{subTitle}</p>;
                })}

                <div className="ratingAndPricing">
                  <div className="rating">{item.rating}</div>
                  <div>
                    &#8377; <strong> {item.price / 100}</strong>
                  </div>
                </div>
              </div>
            </Card>
            {index !== productsList?.length - 1 && <hr />}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
