import { useState } from "react"
import Navbar from "../components/common/Navbar"

function Signup() {
    const [role, setRole] = useState("USER")

    return (
        <div>
            <Navbar />

            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <div className="w-full max-w-md border rounded-lg p-8">

                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Create an account
                    </h2>

                    {/* Role Selection */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={() => setRole("USER")}
                            className={`w-full py-2 rounded border ${
                                role === "USER"
                                    ? "bg-black text-white"
                                    : "bg-white"
                            }`}
                        >
                            Job Seeker
                        </button>

                        <button
                            onClick={() => setRole("RECRUITER")}
                            className={`w-full py-2 rounded border ${
                                role === "RECRUITER"
                                    ? "bg-black text-white"
                                    : "bg-white"
                            }`}
                        >
                            Recruiter
                        </button>
                    </div>

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
                            Sign Up as {role === "USER" ? "Job Seeker" : "Recruiter"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
