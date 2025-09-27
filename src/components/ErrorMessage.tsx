interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center p-8 bg-destructive/10 rounded-lg border border-destructive/20">
        <p className="text-destructive text-lg font-medium mb-2">Error Loading Samples</p>
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;