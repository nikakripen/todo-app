import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";

const TaskList = ({tasksList = []}) => {
  const taskItems = tasksList
    .map((x) => (
      <li class={styles.listItem}>
        <TaskItem task={x} />
      </li>
    ));
  console.log(taskItems);
  return <ul className={styles.listContainer}>{taskItems}</ul>;
};

export default TaskList;
