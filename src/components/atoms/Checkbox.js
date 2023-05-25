import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, name, value = false, className, onCheckedChange, ...rest }) => {
  return (
    <div className={`${styles.toDoCheckbox} ${className}`}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={value}
        onChange={onCheckedChange}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
export default Checkbox;
