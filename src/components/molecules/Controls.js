import Button from "../atoms/Button";
import Stat from "./Stat";
import styles from "./Controls.module.scss";

const Controls = () => {
  return (
    <div className={styles.controls}>
      <Stat />
      <div className={styles.filters}>
        <Button className={styles.filterButton} text="All" />
        <Button className={styles.filterButton} text="Active" />
        <Button className={styles.filterButton} text="Completed" />
      </div>
      <Button className={styles.filterButton} text="Clear Completed" />
    </div>
  );
};

export default Controls;
