import React from 'react'

const COLOR_MAP = {
  blue: {
    bg: "bg-blue-600/30",
    text: "text-blue-600"
  },
  red: {
    bg: "bg-red-600/30",
    text: "text-red-600"
  },
  yellow: {
    bg: "bg-yellow-500/30",
    text: "text-yellow-600"
  }
};

const RideOverview = ({
  title,
  icon,
  onClick,
  color = "blue",
  className = "",
  showArrow = true
}) => {

  const theme = COLOR_MAP[color] || COLOR_MAP.blue;

  return (
    <div className={`inline-flex flex-row justify-center items-center p-6 ${theme.bg} rounded-xl m-2 ${className}`} onClick={onClick}>
        <div className="flex items-center gap-3 pr-5">
            {icon}
            <span className={`${theme.text} text-sm font-semibold`}>{title}</span>
        </div>
        {showArrow && <span className="text-xl font-bold">›</span>}
    </div>
  )
}

export default RideOverview;