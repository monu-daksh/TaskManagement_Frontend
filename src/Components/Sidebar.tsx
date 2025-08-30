
import {
  HomeIcon,
  UsersIcon,
  CubeIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";


const menuItems = [
  { label: "Dashboard", icon: <HomeIcon className="h-5 w-5" /> },
  { label: "Users", icon: <UsersIcon className="h-5 w-5" /> },
  { label: "Products", icon: <CubeIcon className="h-5 w-5" /> },
  { label: "Settings", icon: <Cog8ToothIcon className="h-5 w-5" /> },
];




function Sidebar(){


    return(
        <>
          <aside className="w-60 h-[calc(100vh - 72px)] top-[72px] bg-white shadow-md px-4 py-3 left-0 bottom-0 fixed">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                <button key={`ITEM${index}`} className="flex items-center gap-3 text-gray-700 hover:bg-gray-200 p-4  rounded-md transition-colors">
                     {item.icon}
                  <span className="text-sm font-medium" >{item.label}</span>
                </button>
             ))}
              </nav>
          </aside>
        </>
    )

}

export default Sidebar