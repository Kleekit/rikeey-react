import CustomContainer from "../components/Navigation/CustomContainer";
import React from "react";
// import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "5rem",
    "& .red": {
      color: "rgba(115, 15, 17, 1)",
      cursor: "pointer",
    },
    "& .submitBtn": {
      background: "rgba(115, 15, 17, 1)",
    },
    "& .mBottom": {
      marginBottom: "7rem",
    },
    "& h3": {
      marginBottom: "2.5rem",
    },
    "& .form-group": {
      marginBottom: "3rem",
    },
    "& .customInput": {
      width: "80%",
    },
    "& .returnBtn": {
      fontSize: "1.7rem",
      "@media (max-width: 480px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

const FeedBack = (props) => {
  console.log(props);
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row `,
  };
  const { title = "$404", message = "Page  not found" } = props;
  return (
    <CustomContainer {...customConfig}>
      <div className="col-md-6 mt-6 mb-15 mx-auto">
        <div className="contact-info mBottom  br-3 px-4 py-5">
          <h3 className="fw-600 px-2 ">{title}</h3>
          <div className="form px-4">
            <div className="form-group  fs-sm">
              <label className="mb-2">{message}</label>
              {/* <div className="d-flex ">
                <input
                  type="email"
                  className="form-control customInput no-border"
                  id=""
                  aria-describedby=""
                  placeholder="johndoe@gmail.com"
                />
                <div className="w-20 fs-smr red my-auto text-center fw-700">
                  Change
                </div>
              </div> */}
            </div>
            {/* <div className="form-group mb-4 fs-sm ">
              <label className="mb-2">Phone Number</label>
              <div className="d-flex ">
                <input
                  type="text"
                  className="form-control customInput no-border"
                  id=""
                  placeholder="+234 0345231265"
                />
                <div className="w-20 fs-smr red my-auto text-center fw-700">
                  Change
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default FeedBack;
