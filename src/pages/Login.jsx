import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import { login, getCurrentUser } from "../service/auth.api.js"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setError("")

        try {
            // 1️⃣ Call login API
            await login({ email, password })

            // 2️⃣ Verify authentication
            const user = await getCurrentUser()

            if (!user) {
                throw new Error("Session invalid")
            }

            // 3️⃣ Redirect
            navigate("/dashboard")

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <Navbar />

            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <div className="w-full max-w-md border rounded-lg p-8">

                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Login
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border px-4 py-2 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border px-4 py-2 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {error && (
                            <p className="text-sm text-red-600">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
