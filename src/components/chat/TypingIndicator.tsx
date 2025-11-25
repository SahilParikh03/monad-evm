const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 rounded-2xl w-fit">
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-matrix-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-matrix-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 bg-matrix-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span className="text-sm text-gray-400">Monad AI is thinking...</span>
    </div>
  );
};

export default TypingIndicator;
