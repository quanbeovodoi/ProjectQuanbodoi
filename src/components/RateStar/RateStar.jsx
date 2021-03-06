import React from "react";
import Rating from "@mui/material/Rating";

const RateStar = (number) => {
  const [value, setValue] = React.useState(2);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export default RateStar;
