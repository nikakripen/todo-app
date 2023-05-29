const TextInput = ({ name, value = '', onChange, ...rest }) => {
  return <input type="text" name={name} id={name} value={value} onChange={onChange} {...rest} />;
};

export default TextInput;
