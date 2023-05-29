import { useSelector } from "react-redux";
import TextWrapper from "../atoms/TextWrapper";

const Stat = () => {
  const taskCount = useSelector(
    (state) => state.tasks.filter((t) => !t.checked).length
  );
  return (
    <TextWrapper text={`${taskCount} ${taskCount > 1 ? "items" : "item"} left`} />
  );
};

export default Stat;
