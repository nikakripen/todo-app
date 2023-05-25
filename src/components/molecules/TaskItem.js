import Button from "../atoms/Button";
import Checkbox from "../atoms/Checkbox";
import styles from "./TaskItem.module.scss";
import { ReactComponent as CrossIcon } from "../../images/icon-cross.svg";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../features/tasks/tasksSlice";
const TaskItem = ({ task }) => {
  console.log(task);
  const dispatch = useDispatch();
  const { taskItem, taskCheckbox, iconButton } = styles;

  const handleCheckboxClick = () => {
    dispatch(editTask({ ...task, checked: !task.checked }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask({ ...task }));
  };

  return (
    <div className={taskItem}>
      <Checkbox
        className={taskCheckbox}
        name={`task-${task.id}`}
        value={task.checked}
        label={task.text}
        onCheckedChange={handleCheckboxClick}
      />
      <Button className={iconButton} onClick={handleDeleteClick}>
        <CrossIcon />
      </Button>
    </div>
  );
};

export default TaskItem;
