import Text from "../atoms/Text";

const Stat = ({itemsCount}) => {
  return <Text text={`${itemsCount} items left`} />;
};

export default Stat;
