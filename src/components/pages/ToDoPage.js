import { useState } from "react";
import Text from "../atoms/Text";
import TaskInput from "../molecules/TaskInput";
import Header from "../organisms/Header";
import TasksCard from "../organisms/TasksCard";
import styles from "./ToDoPage.module.scss";

const ToDoPage = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (text) => {
    setTaskList([{id:  crypto.randomUUID(), checked: false, text }, ...taskList]);
  };

  const handleRemoveTask = (taskId) => {
    setTaskList(taskList.filter(t => t.id !== taskId));
  } 

  console.log(styles);
  return (
    <div className={styles.container}>
      <Header />
      <TaskInput onSubmitTask={handleAddTask} />
      <TasksCard taskList={taskList} style={{ margin: "16px 0" }} onTaskDelete={handleRemoveTask} />
      <div className={styles.footer}>
        <Text text="Drag and drop to reorder list" />
      </div>
    </div>
  );
};

export default ToDoPage;
