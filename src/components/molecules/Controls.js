import Button from "../atoms/Button";
import Stat from "./Stat";
import styles from "./Controls.module.scss";
import { deleteCompleted } from "../../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";

const Controls = ({ filterValue, onFilterValueSet }) => {
  const dispatch = useDispatch();
  const handleDeleteCompleted = () => {
    dispatch(deleteCompleted())
  };

  const filters = [
    { name: "All", value: null },
    { name: "Active", value: false },
    { name: "Completed", value: true },
  ].map((filter) => (
    <Button
      key={filter.name}
      className={`${styles.filterButton} ${
        filterValue === filter.value ? styles.active : ""
      }`}
      text={filter.name}
      onClick={() => onFilterValueSet(filter.value)}
    />
  ));

  return (
    <div className={styles.controls}>
      <Stat />
      <div className={styles.filters}>{filters}</div>
      <Button
        className={styles.filterButton}
        text="Clear Completed"
        onClick={handleDeleteCompleted}
      />
    </div>
  );
};

export default Controls;
