import { useState } from "react";
import Checkbox from "../atoms/Checkbox";
import styles from "./TaskInput.module.scss";
import TextInput from "../atoms/TextInput";

const TaskInput = ({ onSubmitTask }) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmitTask(inputValue);
      setInputValue("");
    }
  };
  return (
    <div className={styles.inputWithIcon}>
      <Checkbox className={styles.icon} name="taskInput" disabled />
      <TextInput
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyUp={handleKeyPress}
      />
    </div>
  );
};

export default TaskInput;
