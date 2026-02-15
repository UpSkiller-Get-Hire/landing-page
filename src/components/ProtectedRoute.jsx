import {useAuth} from "../context/AuthContest.jsx";

function ProtectedRoute({children}){
    const {user,loading} = useAuth();

    if(loading) return <p>Loading...</p>;

    if(!user) return <Navigate to="/login" />;

    return children;
}

export default ProtectedRoute;