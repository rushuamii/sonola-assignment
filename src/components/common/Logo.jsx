const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark"></div>
        <div className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark opacity-70"></div>
        <div className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark opacity-40"></div>
      </div>
      <span className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
        SONOLA
      </span>
    </div>
  );
};

export default Logo;
