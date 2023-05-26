import { useState } from "react";
import Text from "../atoms/Text";
import TaskInput from "../molecules/TaskInput";
import Header from "../organisms/Header";
import TasksCard from "../organisms/TasksCard";
import styles from "./ToDoPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../features/tasks/tasksSlice";
import { addTask } from "../../features/tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const ToDoPage = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const taskList = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleAddTask = (text) => {
    if (text) {
      dispatch(addTask({ id: nanoid(), checked: false, text }));
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <TaskInput onSubmitTask={handleAddTask} />
      <TasksCard taskList={taskList} style={{ margin: "16px 0" }} />
      <div className={styles.footer}>
        <Text text="Drag and drop to reorder list" />
      </div>
    </div>
  );
};

export default ToDoPage;
