import React from "react";

function NavBar() {
  return (
    <div>
      <nav className=" bg-nav d-flex mx-0 justify-content-around p-3 fixed-top">
        <div className="col-2 nav-logo-container pt-2">
          <a href="../#" className=" fw-700">
            Clothing-Line
          </a>
        </div>
        <div className="col-7 fw-700 d-flex align-items-center ">
          <div className=" d-flex w-100 justify-content-around text-center">
            <a href="#" className="col-2">
              New
            </a>
            <a className="col-2" href="../shop">
              Shop
            </a>
            <a href="#" className="col-2">
              About
            </a>
            <a href="#" className="col-2">
              Account
            </a>
            <a className="col-2" href="../cart">
              Cart
            </a>
          </div>
        </div>
        <div className="col-2 ">
          <div className="input-group search-nav">
            <label className="search-nav-label me-2" for="">
              {" "}
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather my-auto feather-search "
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>{" "}
            </label>
            <input
              type="text"
              className="form-control btn-sm white small no-box-shadow bg-transparent border-none"
              placeholder="Search"
            />
          </div>
        </div>
      </nav>

      <nav className="sm-nav fixed-top">
        <div id="sideBar">
          <div className=" mt-3 sidebar-nav mx-2 d-flex px-2">
            <span className="close-btn" onclick="closeSidebar()">
              <svg
                width="15"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1.5L1 13.5"
                  stroke="#4D4C4C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1.5L13 13.5"
                  stroke="#4D4C4C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="ms-auto d-flex ">
              <a href="">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather me-4 my-auto feather-search  "
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>{" "}
              </a>
              <a href="">
                {" "}
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather me-1align-middle feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </a>
            </span>
          </div>
          <div className="sidebar-links fs-lg ps-3 mt-3 fw-600">
            <a href="../shop">
              <div className="mb-3 "> Shop</div>
            </a>

            <a href="">
              <div className="mb-3"> New</div>
            </a>

            <div className="mb-4">
              <a href="">
                <div className="mb-3"> Women Active Wear</div>
              </a>

              <div className="sub-links  grey-color">
                <a href="">
                  <div className="mb-3"> Fullsets</div>
                </a>
                <a href="">
                  <div className="mb-3"> Tops and Bras</div>
                </a>
                <a href="">
                  <div className=""> Buttoms</div>
                </a>
              </div>
            </div>

            <div className="mb-4">
              <a href="">
                <div className="mb-3"> Men Active Wear</div>
              </a>

              <div className="sub-links  grey-color">
                <a href="">
                  <div className="mb-3"> Tops</div>
                </a>
                <a href="">
                  <div className="mb-2"> Buttoms</div>
                </a>
              </div>
            </div>

            <div className="mb-4">
              <a href="">
                <div className="mb-3"> Waist Trainer</div>
              </a>

              <div className="sub-links  grey-color">
                <a href="">
                  <div className="mb-3"> Steel bone latex trainer</div>
                </a>
                <a href="">
                  <div className="mb-2"> Strap compression belt 2.0</div>
                </a>
              </div>
            </div>

            <div className="mb-4">
              <a href="">
                <div className="mb-3"> Fitness Equipment</div>
              </a>

              <div className="sub-links  grey-color">
                <a href="">
                  <div className="mb-3"> Jump ropes</div>
                </a>
                <a href="">
                  <div className=""> Resistance band</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-sm-container d-flex  px-4">
          <div className="open-btn" onclick="openSidebar()">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M15 5.5H1"
                stroke="#656161"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 1.5H1"
                stroke="#656161"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 9.5H1"
                stroke="#656161"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 13.5H1"
                stroke="#656161"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className=" nav-logo-container  ms-auto">
            <a href="../#">
              <img
                className="nav-logo-img"
                src="/images/rikeey-logo.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
