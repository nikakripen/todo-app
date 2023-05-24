import TaskList from "../molecules/TaskList";
import Controls from "../molecules/Controls";
import styles from "./TaskCard.module.scss";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const TasksCard = ({ taskList, onTaskDelete, ...rest }) => {
  const [filterValue, setFilterValue] = useState(null);
  
  return (
    <div className={styles.card} {...rest}>
      <TaskList tasksList={taskList} />
      <Controls
        filterValue={filterValue}
        onFilterValueSet={(value) => setFilterValue(value)}
      />
    </div>
  );
};

export default TasksCard;
