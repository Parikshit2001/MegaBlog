const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin-fast rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
      <p className="ml-2">Loading...</p>
    </div>
  );
};

export default Loading;
