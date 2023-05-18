import Label from "../atoms/Label";

const Stat = () => {
  const itemsLeft = 5;
  return (
    <Label style={{ color: "#9c9ca5" }} text={`${itemsLeft} items left`} />
  );
};

export default Stat;
