/* eslint-disable react/prop-types */
import  { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { Container } from "./styles";
export default function Input({ name, value, onChange, ...restProps  }) {
  const { fieldName, registerField } = useField(name);
  const inputRef = useRef(null);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return <Container name={name} value={value} onChange={onChange} {...restProps} />;
}
