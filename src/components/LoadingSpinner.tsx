const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-muted animate-spin" />
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-scientific-blue border-t-transparent animate-spin" />
      </div>
    </div>
  );
};

export default LoadingSpinner;