import { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

CustomInput.displayName = "CustomInput";
export default CustomInput;
