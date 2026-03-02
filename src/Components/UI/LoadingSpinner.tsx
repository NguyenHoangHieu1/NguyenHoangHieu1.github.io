const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-700 border-t-teal-600 dark:border-t-teal-400 rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
