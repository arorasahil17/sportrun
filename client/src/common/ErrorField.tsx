interface ErrorFieldProps {
  message: string;
  className?: string;
}

const ErrorField: React.FC<ErrorFieldProps> = ({ message, className }) => {
  return <p className={`text-[14px] text-red-500 ${className}`}>{message}</p>;
};

export default ErrorField;
