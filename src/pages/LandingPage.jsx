import React from "react";
import CustomContainer from "../components/Navigation/CustomContainer";

function LandingPage() {
  return (
    <CustomContainer>
      <div className="hero-container ">
        <img src="./images/madeforcomfort.png" className="hero-image" alt="" />
        <div className="hero-layer">
          <div className="hero-text">
            <div className="comfort-text ">Made for your comfort</div>
            <div className="complete-text fw-600 ">
              The complete sporty look
            </div>
            <a href="">
              {" "}
              <div className="shop-text br-2 border-white btn  bg-transparent white fw-700">
                Shop Now
              </div>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="catalog-section">
        <div className="catalog-label">
          <div className="catalog-label-text m-auto">
            Rikeey for Everyone...
          </div>
        </div>
        <div className="catalog-image-container px-3 row">
          <div className="col-md-4 men-top px-0">
            <img
              src="./images/men-top.png"
              className="catalog-img img-fluid men-top-img"
              alt=""
            />
            <div className="catalog-text-bg">Men Top</div>
          </div>
          <div className="col-md-4 px-0 women-catalog">
            <div className="d-flex  mx-0 women-short">
              <img
                src="./images/women-short.png"
                className="catalog-img px-0 img-fluid women-short-img"
                alt=""
              />
              <div className="catalog-text-bg">Women Short</div>
            </div>
            <div className="d-flex  mx-0 women-set">
              <img
                src="./images/women-set.png"
                className="catalog-img px-0 img-fluid women-set-img"
                alt=""
              />
              <div className="catalog-text-bg">Women Set</div>
            </div>
          </div>
          <div className="col-md-4  men-bottom px-0">
            <img
              src="./images/men-button.png"
              className="catalog-img men-bottom-img"
              alt=""
            />
            <div className="catalog-text-bg">Men Bottom</div>
          </div>
        </div>
      </div>

      <div className="slider-section">
        <div className="slider-label">
          <div className="slider-label-text m-auto">Take a tour...</div>

          {/* <!--
                        font aweson for the ard-flex left and right
                        how to link font awesome and use it
                        
                        
                        
                        <div className="button-container">
                        <button id="backBtn">
                            back
                        </button>
                        <button id="fwdBtn">
                            fwd
                        </button>
                    </div> -->
                     */}
        </div>

        {/* <!-- <section className="center slider">
                    <div>
                      <img src="https://placehold.it/350x300?text=1"/>
                    </div>
                    <div>
                      <img src="https://placehold.it/350x300?text=2"/>
                    </div>
                    <div>
                      <img src="https://placehold.it/350x300?text=3"/>
                    </div>
                    <div>
                      <img src="https://placehold.it/350x300?text=4"/>
                    </div>
                   
                </section>

                <style type="text/css">
                   
                    .slider {
                        width: 50%;
                        margin: 100px auto;
                    }
                
                    .slick-slide {
                      margin: 0px 20px;
                    }
                
                    .slick-slide img {
                      width: 100%;
                    }
                
                    .slick-prev:before,
                    .slick-next:before {
                      color: black;
                    }
                
                
                    .slick-slide {
                      transition: all ease-in-out .3s;
                      opacity: .2;
                    }
                    
                    .slick-active {
                      opacity: .5;
                    }
                
                    .slick-current {
                      opacity: 1;
                    }
                  </style> --> */}

        {/* <!--
                <div className="slider-container">
                    <div className="image-slide ">
                        <div className="slide-img-container">
                            <img src="../asset/images/men-top.png" className="slider-img img-fluid " alt=""/>
                        </div>
                        <div className="slide-img-container">
                            <img src="../asset/images/men-button.png" className="slider-img img-fluid " alt=""/>
                        </div>
                        <div className="slide-img-container">
                            <img src="../asset/images/women-set.png" className="slider-img img-fluid " alt=""/>
                        </div>
                    </div>
                </div> --> */}
      </div>
    </CustomContainer>
  );
}

export default LandingPage;
