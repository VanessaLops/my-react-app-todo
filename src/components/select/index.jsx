import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";

const Select = ({ name, ...rest }) => {
  const { fieldName, registerField } = useField(name);
  const selectRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return <Container {...rest} ref={selectRef} />;
};

export default Select;
