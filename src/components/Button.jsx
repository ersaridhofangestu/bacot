export default function Button ({ children, className, ...props }){
  return (
    <button {...props} className={`button_buy ${className}`}>
      {children}
    </button>
  );
};
