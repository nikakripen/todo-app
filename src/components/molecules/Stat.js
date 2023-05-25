import { useSelector } from "react-redux";
import Text from "../atoms/Text";

const Stat = () => {
  const taskCount = useSelector(
    (state) => state.tasks.filter((t) => !t.checked).length
  );
  return (
    <Text text={`${taskCount} ${taskCount > 1 ? "items" : "item"} left`} />
  );
};

export default Stat;
