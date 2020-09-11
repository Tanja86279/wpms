import React from "react";
import { Item, Input } from "native-base";

const FormTextInput = ({ ...otherProps }) => {
  return (
    <Item>
      <Input {...otherProps} />
    </Item>
  );
};

export default FormTextInput;
