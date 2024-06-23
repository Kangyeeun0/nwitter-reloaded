import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const user = auth.currentUser;
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}

//firebase에게 로그인한 사용자가 누구인지 물어보는 route
//만약 로그인되지 않았다면, 사용자가 protected route의 하위 페이지를 못 보게 막고있음
