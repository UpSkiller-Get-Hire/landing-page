import Navbar from "../components/common/Navbar"

function Home() {
    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Smart recruitment for
                            <span className="text-blue-600"> job seekers </span>
                            and
                            <span className="text-blue-600"> recruiters</span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg max-w-xl">
                            A modern hiring platform that connects skilled candidates
                            with the right opportunities using structured profiles
                            and intelligent matching.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button className="bg-black text-white px-6 py-3 rounded-md">
                                Find Jobs
                            </button>
                            <button className="border px-6 py-3 rounded-md">
                                Hire Talent
                            </button>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="hidden md:flex justify-center">
                        <div className="w-full max-w-md h-64 rounded-lg border bg-white shadow-sm flex items-center justify-center text-gray-400">
                            Illustration / Preview
                        </div>
                    </div>

                </div>
            </section>


            {/* What We Do */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">
                        What We Do
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We simplify the hiring process by connecting job seekers and recruiters
                        through structured profiles and skill-focused matching.
                    </p>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">

                        <div className="border rounded-lg p-6 text-left">
                            <h3 className="font-semibold text-lg mb-2">
                                Smart Matching
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Candidates and jobs are matched based on skills, not just keywords.
                            </p>
                        </div>

                        <div className="border rounded-lg p-6 text-left">
                            <h3 className="font-semibold text-lg mb-2">
                                Separate Experiences
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Job seekers and recruiters get dedicated dashboards designed for their needs.
                            </p>
                        </div>

                        <div className="border rounded-lg p-6 text-left">
                            <h3 className="font-semibold text-lg mb-2">
                                Faster Hiring
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Reduce hiring time with clear profiles, filtering, and structured workflows.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* Benefits */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-bold text-center">
                        Who Is This For?
                    </h2>

                    <div className="mt-12 grid gap-10 md:grid-cols-2">

                        {/* Job Seekers */}
                        <div className="bg-white border rounded-lg p-8">
                            <h3 className="text-xl font-semibold mb-4">
                                For Job Seekers
                            </h3>

                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li>• Get relevant job recommendations</li>
                                <li>• Track your applications easily</li>
                                <li>• No irrelevant job spam</li>
                                <li>• One profile, many opportunities</li>
                            </ul>
                        </div>

                        {/* Recruiters */}
                        <div className="bg-white border rounded-lg p-8">
                            <h3 className="text-xl font-semibold mb-4">
                                For Recruiters
                            </h3>

                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li>• Post jobs quickly</li>
                                <li>• Filter candidates by skills</li>
                                <li>• Shortlist efficiently</li>
                                <li>• Reduce hiring time</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-sm text-gray-500">
                © 2026 SmartRecruit. All rights reserved.
            </footer>
        </div>
    )
}

export default Home
