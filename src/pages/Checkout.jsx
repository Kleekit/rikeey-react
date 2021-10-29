import React from "react";
import { useHistory } from "react-router-dom";

import CustomContainer from "../components/Navigation/CustomContainer";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useMutation } from "react-query";
import { register } from "../methods/cart.method";

const useStyles = makeStyles({
  root: {
    marginTop: "5rem",
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
    "& .returnBtn": {
      fontSize: "1.7rem",
      "@media (max-width: 480px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

function Checkout() {
  // routing
  const history = useHistory();

  //styles
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row `,
  };

  //mutate call
  const { isError, isLoading, data, mutateAsync } = useMutation((payload) =>
    register(payload)
  );

  const handleFormSubmit = async (value) => {
    const user = await mutateAsync(value);
    console.log({ user });
    if (user.status) {
      history.replace("/checkout/payment");
    }
  };

  //form validation
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      city: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      address: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required, use a landmark "),
      country: Yup.string().max(15, "Must be 20 characters or less"),
      // .required("Required"),
      state: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required, abi you wan dash me"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required, I have send you a waybill"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required, dispatch rider needs to call you"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleFormSubmit(values);
    },
  });

  return (
    <CustomContainer {...customConfig}>
      {!isLoading ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="col-md-6 mt-6 mb-15 mx-auto ">
            <div className="contact-info mBottom br-3 px-4 py-5">
              <h3 className="fw-600 px-2 ">Contact Information</h3>
              <div className="form px-4">
                <CustomInput
                  formik={formik}
                  formikTag="email"
                  type="email"
                  label="Email Address"
                  labelText="Email"
                />
                <CustomInput
                  formik={formik}
                  formikTag="phone"
                  type="digit"
                  label="phone Number"
                  labelText="Phone Number"
                />
              </div>
            </div>
            <div className="contact-info mBottom br-3 px-4 py-5">
              <h3 className="fw-600 px-2 ">Waybill Information</h3>
              <div className="form px-4">
                <CustomInput
                  formik={formik}
                  formikTag="firstName"
                  type="text"
                  label="first name"
                  labelText="First name"
                  placeholder="Nelly"
                />
                <CustomInput
                  formik={formik}
                  formikTag="lastName"
                  type="text"
                  label="last name"
                  labelText="Last name"
                  placeholder="Emmanuel"
                />

                <CustomInput
                  formik={formik}
                  formikTag="address"
                  type="text"
                  label="Address"
                  labelText="Address"
                  placeholder="Jakpa road"
                />

                <div className="country-state-form w-80 d-flex justify-content-between">
                  {/* <div className="form-group  w-40 fs-sm"> */}
                  <CustomInput
                    formik={formik}
                    formikTag="country"
                    type="text"
                    label="Country"
                    labelText="Country"
                    placeholder="Nigeria"
                  />
                  {/* </div> */}
                  {/* <div className="form-group  w-40 fs-sm"> */}
                  <CustomInput
                    formik={formik}
                    formikTag="state"
                    type="text"
                    label="State"
                    labelText="State"
                    placeholder="Delta"
                  />
                  {/* </div> */}
                </div>
                <CustomInput
                  formik={formik}
                  formikTag="city"
                  type="text"
                  label="City"
                  labelText="City"
                  placeholder="Waf city"
                />
                {/* <div className="form-group  fs-sm">
                <label className="mb-2">City</label>
                <input
                  type="text"
                  className="form-control w-80 no-border"
                  id=""
                  placeholder="Warri"
                />
              </div> */}
                {/* <div className="form-group form-check ">
                <input
                  type="checkbox"
                  className="form-check-input bg-grey"
                  id=""
                />
                <label className="form-check-label fs-sm">
                  Save my details
                </label>
              </div> */}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/cart">
                <div className="ms-3 returnBtn d-flex">
                  <ArrowLeft
                    sx={{
                      fontSize: "2.4rem",
                    }}
                  />
                  <span>Return to cart </span>
                </div>
              </Link>
              <Button
                type="submit"
                className="submitBtn me-3 br-2 py-3 px-5 fw-600 justify-content-end white"
              >
                <div>Continue</div>
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <h1>Loading...</h1>
      )}
    </CustomContainer>
  );
}

const CustomInput = ({
  formik,
  formikTag,
  type,
  label,
  labelText,
  placeholder,
}) => {
  return (
    <div className="form-group  fs-sm">
      <label className="mb-2" htmlFor={label}>
        {labelText}
      </label>
      <input
        className="form-control w-80 no-border"
        aria-describedby=""
        placeholder={placeholder}
        id={label} // accessability
        name={formikTag} // formik
        type={type} // html
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[formikTag]}
      />
      {formik.touched[formikTag] && formik.errors[formikTag] ? (
        <div>{formik.errors[formikTag]}</div>
      ) : null}
    </div>
  );
};

export default Checkout;
