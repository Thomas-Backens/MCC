import React from "react";
import useStyles from "./styles";

const Homepage = () => {
  const s = useStyles();

  return (
    <div>
      <h2 className={s.root}>Welcome!</h2>
    </div>
  );
};

export default Homepage;
