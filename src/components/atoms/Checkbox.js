import { useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, name, value = false, className, ...rest }) => {
  const [isChecked, setIsChecked] = useState(value);
  return (
    <div className={`${styles.toDoCheckbox} ${className}`}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
export default Checkbox;
