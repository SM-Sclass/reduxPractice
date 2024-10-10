import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (

        <div className="w-full mx-auto">

            <nav className="bg-blue-500 text-white px-4 py-2">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold">RTK</Link>
                    </div>
                    <div className="flex items-center">
                        <Link to="/createpost" className="mr-4 hover:text-gray-200">Create Post</Link>
          <Link to="/allposts" className="mr-4 hover:text-gray-200">All Posts</Link>
                        <div className="relative">
                            <input type="text" className="border-gray-300 rounded-md px-3 py-2" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navbar