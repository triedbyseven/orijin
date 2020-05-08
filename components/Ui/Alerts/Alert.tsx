export interface AlertProps {
  type: string;
  children: string;
}

const Alert: React.SFC<AlertProps> = (props) => {
  const { type, children } = props;

  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
