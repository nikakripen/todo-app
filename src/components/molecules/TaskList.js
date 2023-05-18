import { faker } from "@faker-js/faker";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  const taskItems = [...Array(10)]
    .map((i) => ({
      id: Math.floor(Math.random() * 100),
      checked: false,
      text: faker.lorem.sentence(),
    }))
    .map((x) => (
      <li class={styles.listItem}>
        <TaskItem task={x} />
      </li>
    ));
  console.log(taskItems);
  return <ul className={styles.listContainer}>{taskItems}</ul>;
};

export default TaskList;
