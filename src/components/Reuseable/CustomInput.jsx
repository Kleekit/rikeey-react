import React from "react";

export default function CustomInput({
  formik,
  formikTag,
  type,
  label,
  labelText,
  placeholder,
  labelWidth,
}) {
  return (
    <div className="w-full mb-[3rem]">
      <div className="w-full mb-[0.5rem] font-bold flex items-center justify-between fs-sm">
        <label className={`${labelWidth} mb-2`} htmlFor={label}>
          {labelText}
        </label>
        <input
          className="rounded-[0.5rem] p-3 w-[80%] border-none"
          aria-describedby=""
          placeholder={placeholder}
          id={label} // accessability
          name={formikTag} // formik
          type={type} // html
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[formikTag]}
        />
      </div>
      <div className="w-[78%] ml-auto text-[1.3rem]">
        {formik.touched[formikTag] && formik.errors[formikTag] ? (
          <div>{formik.errors[formikTag]}</div>
        ) : null}
      </div>
    </div>
  );
}
