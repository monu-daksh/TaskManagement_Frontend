function RealStatePage() {
    const features = [
        { title: "Fast Performance", desc: "Website super fast chalegi." },
        { title: "Responsive Design", desc: "Har device pe perfect look." },
        { title: "Easy to Customize", desc: "Code simple aur maintainable." },
    ];
    return (
        <>
            <nav className="bg-gray-200 flex items-center justify-between px-8 py-4 shadow-md">
                <h1 className="text-2xl font-bold ">My Brand</h1>
                <ul className="flex space-x-6 ">
                    <li>
                        <a href="#" className="hover:text-blue-500">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50">
                <div className="max-w-lg">
                    <h1 className="text-4xl font-bold mb-4"> Build Your Future with <span className="text-blue-600">MyBrand</span></h1>
                    <p className="text-gray-600 mb-6">
                        Aapka tagline yaha likho jo user ko attract kare.
                    </p>
                    <button className="px-6 py-3 bg-blue-600  text-white rounded hover:bg-blue-700 transition cursor-pointer">
                        Get Started
                    </button>
                </div>
                <img
                    src="https://picsum.photos/600/400?random=1"
                    alt="Hero"
                    className="mt-8 md:mt-0 md:ml-10"
                />


            </section>
            <section className="bg-white px-8 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, idx) => (
                        <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                            <h3 className="">{f.title}</h3>
                            <p className="">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center px-8 py-16 bg-gray-50">
                <img
                    src="https://picsum.photos/600/400?random=1"
                    alt="About"
                    className="mb-8 md:mb-0 md:mr-12 rounded-lg shadow"
                />
                <div >
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-600 mb-6">
                        Yaha apne company ya service ke bare me thoda detail likho.
                    </p>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition cursor-pointer">
                        Learn More
                    </button>
                </div>
            </section>
            <section className="bg-blue-600 text-center px-8 py-16 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="mb-4">Join us today and make your business shine.</p>
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100">
                    Join Now
                </button>
            </section>
        </>
    );
}

export default RealStatePage;
