import React from "react";

export default function CustomInput({
  formik,
  formikTag,
  type,
  label,
  labelText,
  placeholder,
}) {
  return (
    <div className="form-group fs-sm" style={{ marginBottom: "3rem" }}>
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
}
