import React from "react";
import styles from "./Button.module.scss";

const Button = ({title, onClick}) => {
  return (
    <button className={styles.button} onClick={() => {if(onClick) onClick()}}>
      <p className={styles.buttonTitle}>{title}</p>
    </button>
  );
};

export default Button;