import React from "react";
// import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { Button } from "@mui/material";
import { useMutation, useQuery } from "react-query";
import { getUser, register } from "../methods/cart.method";
import { getOrStoreId } from "../helpers/getOrStore.helper";
import CustomInput from "../components/Reuseable/CustomInput";
import Layout from "../components/Utility/Layout";

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

export default function Checkout() {
  //styles
  const classes = useStyles();
  const customConfig = {
    customStyle: `${classes.root} pt-4 px-5 row `,
  };
  const user = useQuery("user", getUser);

  //mutate call
  const { isLoading, mutateAsync } = useMutation((payload) =>
    register(payload)
  );

  const handleFormSubmit = async (value) => {
    value.sharedPreference = getOrStoreId();

    const user = await mutateAsync(value);
    console.log({ user });
    if (user.status) {
      getOrStoreId(user.body.sharedPreference);
      window.location.href = user.body.pay;
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
      handleFormSubmit(values);
    },
  });

  return (
    <Layout {...customConfig}>
      {!isLoading || user.isLoading ? (
        <form onSubmit={formik.handleSubmit}>
          <div className=" w-6/7 sm:w-1/2 mt-6 mb-15 mx-auto ">
            <div className="contact-info mBottom rounded-[1.5rem] px-[1.5rem] py-5">
              <h3 className="font-[600] px-2 ">Contact Information</h3>
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
            <div className="contact-info mBottom rounded-[1.5rem] px-[1.5rem] py-5">
              <h3 className="font-[600] px-2 ">Waybill Information</h3>
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

                <div className="country-state-form grid grid-cols-4 gap-[3rem]">
                  <div className="col-span-2">
                    <CustomInput
                      labelWidth="w-[60%]"
                      formik={formik}
                      formikTag="country"
                      type="text"
                      label="Country"
                      labelText="Country"
                      placeholder="Nigeria"
                    />
                  </div>
                  <div className="col-span-2">
                    <CustomInput
                      labelWidth="w-[35%]"
                      formik={formik}
                      formikTag="state"
                      type="text"
                      label="State"
                      labelText="State"
                      placeholder="Delta"
                    />
                  </div>
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
            <div className="flex justify-between items-center">
              <Link to="/cart">
                <div className="ml-3 returnBtn flex">
                  <ArrowLeft
                    sx={{
                      fontSize: "2.4rem",
                    }}
                  />
                  <span>Return to cart </span>
                </div>
              </Link>
              <button
                type="submit"
                className="submitBtn text-[1.5rem] sm:text-[1.3rem] mr-3 rounded-[0.5rem] py-3 px-5 font-[600] justify-end "
              >
                <div className="text-white font-bold">Continue</div>
              </button>
            </div>
          </div>
        </form>
      ) : (
        <h1>Loading...</h1>
      )}
    </Layout>
  );
}
