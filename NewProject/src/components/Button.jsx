export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
}) {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-lg px-4 py-2
    text-md font-medium
    transition
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-black text-gray-100 hover:bg-gray-800 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}
