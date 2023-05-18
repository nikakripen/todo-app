const Button = ({ type = 'button', onClick, text, children, ...rest }) => {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {text}
      {children}
    </button>
  );
};

export default Button;
