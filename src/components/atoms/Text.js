const Text = ({ text, ...rest }) => {
  return <p style={{ color: "#9c9ca5" }} {...rest}>{text}</p>;
};

export default Text;