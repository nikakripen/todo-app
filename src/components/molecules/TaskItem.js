import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import styles from "./TaskItem.module.scss";
import { ReactComponent as CrossIcon } from "../../images/icon-cross.svg";

const TaskItem = ({ task }) => {
  console.log(styles);
  const { taskItem, taskCheckbox, iconButton } = styles;
  return (
    <div className={taskItem}>
      <Checkbox
        className={taskCheckbox}
        name={`task-${task.id}`}
        value={task.checked}
        text={task.text}
      />
      <Button className={iconButton}>
        <CrossIcon />
      </Button>
    </div>
  );
};

export default TaskItem;
