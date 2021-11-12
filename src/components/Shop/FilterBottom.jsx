import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getCategory } from "../../methods/product.method";

export default function FilterBottom() {
  const { data } = useQuery("getCategory", getCategory);
  // const data = filterData;

  return (
    <span>
      {data &&
        data.status &&
        data.body.map((body) => (
          <div
            className="filterBarLinks mx-auto w-60"
            key={body.category.categoryName}
          >
            <Link to={`/shop/${body.category.categoryName}`}>
              <div className="filter-mn fs-nm fw-700 mb-3 w-70 px-2">
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
                    <h4 className="mb-3 ms-2">{subCat.subCategoryName}</h4>
                  </Link>
                ))}
            </div>
          </div>
        ))}
    </span>
  );
}
