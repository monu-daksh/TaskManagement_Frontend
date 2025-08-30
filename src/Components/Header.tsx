import Image from "next/image";
import images from "../assets/Images"


function Header(){

    return(
        <header className="w-full bg-white shadow-md px-6 py-6 flex  items-center justify-between fixed">
            <div className="flex items-center gap-2">
                <Image src={images.logo} alt="Logo" width={200} height={100} />
            </div>

            <div className="w-1/2 max-w-md">
                <input
                 type="text"
                 placeholder="Search anything..."
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>

            <div className="flex items-center gap-2 px-10">
                <Image src={images.profilePic} width={40} height={40} alt="avatar" className="rounded-full"  />
                <span className="text-sm text-gray-700 hidden sm:inline">Monu</span>
            </div>

        </header>
    )

}

export default Header