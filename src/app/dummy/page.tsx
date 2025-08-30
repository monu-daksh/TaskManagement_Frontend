function DummyWebsite() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-xl hidden lg:block">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-purple-600">DashCraft</h2>
        </div>
        <nav className="flex flex-col p-4 gap-4 text-gray-700 text-sm">
          <a className="hover:bg-purple-100 rounded-md px-3 py-2 transition cursor-pointer">
            Dashboard
          </a>
          <a className="hover:bg-purple-100 rounded-md px-3 py-2 transition cursor-pointer">
            Users
          </a>
          <a className="hover:bg-purple-100 rounded-md px-3 py-2 transitoin cursor-pointer">
            Orders
          </a>
          <a className="hover:bg-purple-100 rounded-md px-3 py-2 transition cursor-pointer">
            Settings
          </a>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold  text-gray-800">
            Welcome Back!
          </h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-xl px-3 py-1.5 text-sm  focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-white font-bold">
              M
            </div>
          </div>
        </header>
      </div>
      <main className="p-6 mt-10 space-y-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Sales", "Users", "Revenue", "Growth"].map((label, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <h3 className="text-sm text-gray-500">{label}</h3>
              <p className="text-2xl font-bold text-purple-600 mt-2">{Math.floor(Math.random() * 1000)}</p>
            </div>
          ))}
        </section>
        <section className="grid grid-cold-1  lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Traffic Overview</h3>
            <div  className="h-40 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg animate-pulse" />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="text-sm space-y-2">
              <li className="text-gray-600">+ New user registered</li>
              <li className="text-gray-600">+ Order #1234 placed</li>
              <li className="text-gray-600">~ Payment pending</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">User Table</h3>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 font-medium text-gray-600">Name</th>
                <th className="p-2 font-medium text-gray-600">Email</th>
                <th className="p-2 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody >
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="border-b">
                  <td  className="p-2">User {i + 1}</td>
                  <td  className="p-2">user{i + 1}@example.com</td>
                  <td  className="p-2">
                    <span className="inline-block px-2 py-1 rounded-full text-sm font-medium  bg-green-100 text-green-600">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
       <footer  className="p-4 text-xs text-center text-gray-600np">
          DashCraft © {new Date().getFullYear()} – Built with Tailwind
        </footer>
    </div>
  );
}

export default DummyWebsite;
