import React from "react";

export default function FIlterBottom() {
  return (
    <span>
      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 mb-3 w-70 px-2">New</div>
      </div>

      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 mb-3 px-2">
          Women Active Wear
        </div>
      </div>

      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 w-90 mb-3 px-2">
          Men Active Wear
        </div>
      </div>

      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 w-80 mb-3 px-2">
          Waist Trainer
        </div>
      </div>

      <div className="filterBarLinks mx-auto w-60">
        <div className="filter-mn fs-nm fw-700 mb-3 px-2">
          Fitness Equipment
        </div>
      </div>
    </span>
  );
}
