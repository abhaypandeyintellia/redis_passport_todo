import { useNavigate } from "react-router-dom";
import { sidebarItems } from "./sidebarConfig";

export default function Sidebar({ active, isOpen }) {

  const navigate = useNavigate();

  const handleClick = (label) => {
      const slug = label.toLowerCase();
      navigate(`/${slug}`);
  }

  return (
    <aside 
      className={`min-h-screen bg-linear-to-b from-blue-600 to-blue-700 text-white flex flex-col shadow-2xl ${
        isOpen ? "w-56" : "w-0 overflow-hidden"
      } transition-all duration-300 ease-in-out`}
    >

      <div className="px-3 pt-0 pb-6">
        <div className="bg-white rounded-2xl rounded-t-none py-4 px-4 shadow-lg">
          <div className="flex items-center justify-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" 
                />
              </svg>
            </div>
            <span className="text-blue-700 text-xl font-bold tracking-tight">
              Otian
            </span>
          </div>
        </div>
      </div>


      <div className="px-5 mb-3">
        <p className="text-white text-sm font-semibold tracking-wide">Menu</p>
      </div>


      <nav className="px-3 flex flex-col gap-1">
        {sidebarItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;

          return (
            <button
              onClick={()=>handleClick(label)}
              key={id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ease-in-out ${
                isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-blue-50 hover:bg-blue-500/30"
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" strokeWidth={2.2} />
              <span className="text-sm font-medium tracking-wide">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}