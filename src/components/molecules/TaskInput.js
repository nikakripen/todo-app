import Checkbox from "../atoms/Checkbox";
import styles from "./TaskInput.module.scss";

const TaskInput = () => {
  return (
    <div className={styles.inputWithIcon}>
      <Checkbox className={styles.icon} name="taskInput" />
      <input type="text" />
    </div>
  );
};

export default TaskInput;
