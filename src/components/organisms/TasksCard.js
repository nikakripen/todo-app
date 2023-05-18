import TaskList from "../molecules/TaskList";
import Controls from "../molecules/Controls";
import styles from "./TaskCard.module.scss";

const TasksCard = ({ ...rest }) => {
  return (
    <div className={styles.card} {...rest}>
      <TaskList />
      <Controls />
    </div>
  );
};

export default TasksCard;
