import Button from "../atoms/Button";
import Stat from "./Stat";
import styles from "./Controls.module.scss";

const Controls = ({ itemsCount, filterValue, onFilterValueSet }) => {
  const filters = [
    { name: "All", value: null },
    { name: "Active", value: false },
    { name: "Completed", value: true },
  ].map((filter) => (
    <Button key={filter.name}
      className={`${styles.filterButton} ${
        filterValue === filter.value ? styles.active : ""
      }`}
      text={filter.name}
      onClick={() => onFilterValueSet(filter.value)}
    />
  ));

  return (
    <div className={styles.controls}>
      <Stat itemsCount={itemsCount} />
      <div className={styles.filters}>
        {/* <Button className={`${styles.filterButton} ${}`} text="All" />
        <Button className={styles.filterButton} text="Active" />
        <Button className={styles.filterButton} text="Completed" /> */}
        {filters}
      </div>
      <Button className={styles.filterButton} text="Clear Completed" />
    </div>
  );
};

export default Controls;
