import CustomContainer from "../components/Navigation/CustomContainer";
import React, { useEffect } from "react";
// import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router";
// import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { prepareTransaction } from "../methods/cart.method";

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

const Reference = (props) => {
  // const history = useHistory();
  const { reference } = useParams();
  const { isLoading, isError, mutateAsync } = useMutation((reference) =>
    prepareTransaction(reference)
  );
  //   console.log(params);
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row `,
  };
  const initializePayStack = async () => {
    const res = await mutateAsync({ reference });
    if (res.status) {
      window.location.href = res.body;
      //   history.replace(res.body);
    }
  };
  useEffect(() => {
    initializePayStack();
  }, []);
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  if (isError) {
    <h1>error...</h1>;
  }
  return (
    <CustomContainer {...customConfig}>
      <div className="col-md-6 mt-6 mb-15 mx-auto">
        <div className="contact-info mBottom  br-3 px-4 py-5">
          <h3 className="fw-600 px-2 ">{"title"}</h3>
          <div className="form px-4">
            <div className="form-group  fs-sm">
              <h1>just a second</h1>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Reference;
