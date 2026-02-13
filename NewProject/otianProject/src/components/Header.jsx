import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header({
  leftIcon,
  onLeftClick,
  showSearch = true,
  searchPlaceholder = "Search",
  onSearch,
  rightIcon,
  onRightClick
}) {
  return (
    <header className="h-14 w-full bg-gray-100 flex items-center px-4 gap-4">
      <div>
        {leftIcon && (
          <button
            onClick={onLeftClick}
            className="p-2 rounded-md hover:bg-gray-200 transition"
          >
            <FontAwesomeIcon
              icon={leftIcon}
              className="text-gray-700 text-lg"
            />
          </button>
        )}
      </div>

      <div className="flex-1 flex justify-start">
        {showSearch && (
          <div className="relative w-full max-w-md">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
            />

            <input
              type="text"
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch?.(e.target.value)}
              className="w-full h-9 rounded-full bg-white pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 outline-none border border-gray-200 focus:ring-2 focus:ring-orange-400"
            />
          </div>
        )}
      </div>

      <div>
        {rightIcon && (
          <button
            onClick={onRightClick}
            className="p-2 rounded-md hover:bg-gray-200 transition"
          >
            <FontAwesomeIcon
              icon={rightIcon}
              className="text-gray-700 text-lg"
            />
          </button>
        )}
      </div>
    </header>
  );
}
