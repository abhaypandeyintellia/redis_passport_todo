import Label from "./Label";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  className = "",
  disabled = false,
}) {
  return (
    <div className="flex flex-col p-2">
      {label && <Label htmlFor={id}>{label}</Label>}

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder || label}  
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          bg-gray-100
          py-3 px-3 rounded-md
          text-md font-light
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-50
          ${className}
        `}
      />
    </div>
  );
}
