import Label from "./Label";

export default function SelectInput({
  label,
  options = [],
  value,
  onChange,
  className = "",
}) {
  return (
    <div className="flex flex-col p-2">
      {label && <Label>{label}</Label>}

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={`
            w-full
            bg-gray-100
            text-gray-400
            py-3 px-3 pr-12
            rounded-md
            text-md font-light
            focus:outline-none focus:ring-2 focus:ring-blue-500
            appearance-none
            cursor-pointer
            ${className}
          `}
        >
          <option value="" disabled>
            {label}
          </option>

          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        {/* Arrow (visual only, does NOT capture clicks) */}
        <div
          className="
            pointer-events-none
            absolute right-0 top-0 h-full w-12
            flex items-center justify-center
            bg-gray-100
            rounded-r-md
            text-gray-500
          "
        >
          ▼
        </div>
      </div>
    </div>
  );
}
