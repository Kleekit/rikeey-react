import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getCategory } from "../../methods/product.method";

export default function FilterBottom() {
  const { data } = useQuery("getCategory", getCategory);
  // const data = filterData;

  return (
    <span>
      {data && data.status ? (
        <span>
          <div className="filterBarLinks mx-auto mt-[2rem] w-[85%] ">
            <Link to={`/shop`}>
              <div className="filter-mn fs-nm font-[700] mb-[3rem] pb-[1rem] px-[1rem]">
                All Products
              </div>
            </Link>
          </div>
          {data.body.map((body) => (
            <div
              className="filterBarLinks mx-auto w-[85%]"
              key={body.category.categoryName}
            >
              <Link to={`/shop/${body.category.categoryName}`}>
                <div className="filter-mn fs-nm font-[700] mb-[3rem] pb-[1rem] px-[1rem]">
                  {body.category.categoryName}
                </div>
              </Link>
              <div className="subCat mt-3">
                {body.subCategories.length > 0 &&
                  body.subCategories.map((subCat) => (
                    <Link
                      to={`/shop/${body.category.categoryName}/${subCat.subCategoryName}`}
                      key={subCat.subCategoryName}
                    >
                      <h4 className="mb-[3rem] ml-2">
                        {subCat.subCategoryName}
                      </h4>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </span>
      ) : (
        <h2>abeg wait small</h2>
      )}
    </span>
  );
}
