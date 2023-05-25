import TaskList from "../molecules/TaskList";
import Controls from "../molecules/Controls";
import styles from "./TaskCard.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./../../features/tasks/tasksSlice";

const TasksCard = ({ ...rest }) => {
  const taskList = useSelector(selectTasks);
  const [filterValue, setFilterValue] = useState(null);
  const filteredTaskList = taskList.filter(t => filterValue === null || t.checked === filterValue);
  return (
    <div className={styles.card} {...rest}>
      <TaskList tasksList={filteredTaskList} />
      <Controls
        filterValue={filterValue}
        onFilterValueSet={(value) => setFilterValue(value)}
      />
    </div>
  );
};

export default TasksCard;
