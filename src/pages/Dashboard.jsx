import Navbar from "../components/common/Navbar";

function Dashboard() {
    return (
        <div>
            <Navbar />

            <div className="min-h-[80vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">
                        Dashboard
                    </h1>
                    <p className="text-gray-600 mt-4">
                        You are successfully authenticated.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
