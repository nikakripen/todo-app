import Label from "../atoms/Label";
import TaskInput from "../molecules/TaskInput";
import Header from "../organisms/Header";
import TasksCard from "../organisms/TasksCard";
import styles from "./ToDoPage.module.scss";

const ToDoPage = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <Header />
      <TaskInput />
      <TasksCard style={{margin: "16px 0"}}/>
      <div className={styles.footer}>
        <Label text="Drag and drop to reorder list" />
      </div>
    </div>
  );
};

export default ToDoPage;
