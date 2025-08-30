import Header from "@/Components/Header"
import Sidebar from "@/Components/Sidebar"


function HomePage(){


    return(
        <div className="w-full">
        <Header />
        <Sidebar  />
          <main className="ml-60  p-6 bg-gray-50 min-h-screen max-80 scroll-y-auto">
             <h1 className="text-2xl font-bold mb-6 text-gray-600">Dashboard</h1>
             <section className="grid grid-col-1 sm:grid-col-2 lg:grid-col-4 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                    <h2 className="text-lg font-medium text-gray-700">Total User</h2>
                    <p className="text-2xl font-bold text-blue-400 mt-2">1,809</p>
                </div>
                 <div className="bg-white p-4 shadow-lg rounded-xl">
                    <h2 className="text-lg font-medium text-gray-700">Total Users</h2>
                    <p className="text-2xl text-blue-400 font-bold mt-2">1,000</p>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-xl">
                    <h2 className="text-lg text-gray-700 font-medium">Total Users</h2>
                    <p className="text-2xl font-bold text-blue-400  mt-2">7,090</p>
                </div>
                 <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-medium text-gray-700">Total Users</h2>
                    <p className="text-2xl font-bold text-blue-400 mt-2">6,000</p>
                </div>
             </section>
          </main>
        </div>
    )

}


export default HomePage