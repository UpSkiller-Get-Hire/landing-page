import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-8 border-b">

            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
                SmartRecruit
            </Link>

            {/* Actions */}
            <div className="space-x-4">
                <Link to="/login" className="text-sm font-medium">
                    Login
                </Link>

                <Link
                    to="/signup"
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Sign up
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
