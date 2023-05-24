const Input = ({ name, value = '', onChange }) => {
  return <input type="text" name={name} id={name} value={value} onChange={onChange} />;
};

export default Input;
