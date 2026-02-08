import Navbar from "../components/common/Navbar"

function Login() {
    return (
        <div>
            <Navbar />

            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <div className="w-full max-w-md border rounded-lg p-8">

                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Login to your account
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border px-4 py-2 rounded"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border px-4 py-2 rounded"
                        />

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-gray-600 text-center mt-4">
                        Don’t have an account? Sign up
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
