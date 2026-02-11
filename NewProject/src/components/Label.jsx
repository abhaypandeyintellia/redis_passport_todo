export default function Label({ children, htmlFor, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-md font-sans font-medium text-black mb-1 ${className}`}
    >
      {children}
    </label>
  );
}
