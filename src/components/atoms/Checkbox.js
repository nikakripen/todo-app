import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, name, value, className, text, ...rest }) => {
  return (
    <div className={`${styles.toDoCheckbox} ${className}`}>
      <input type="checkbox" name={name} id={name} value={value} />
      <label for={name}>{text}</label>
    </div>
  );
};
export default Checkbox;
