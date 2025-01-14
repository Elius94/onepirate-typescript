import React from "react";
import Button from "../components/Button";
import defer from "./defer";
import { ButtonProps } from "@mui/material";

interface FormButtonProps {
  disabled?: boolean;
  mounted?: boolean;
}

function FormButton<C extends React.ElementType>(
  props: FormButtonProps & ButtonProps<C, { component?: C }>
) {
  const { disabled, mounted, ...others } = props;
  return (
    <Button
      disabled={!mounted || !!disabled}
      type="submit"
      variant="contained"
      {...others}
    />
  );
}
export default defer(FormButton);
