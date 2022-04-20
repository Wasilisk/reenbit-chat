import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../store/slices/authSlice";
import ChatPage from "../pages/ChatPage";

const AppRouter = () => {
    const isAuth = useSelector(selectIsAuth);

    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                {
                    isAuth
                        ? <Route path="/chat" element={<ChatPage/>}/>
                        : null
                }
                <Route
                    path="*"
                    element={<Navigate to={isAuth ? "/chat"  : "/login"}/>}
                />
            </Routes>
        </>
    )
}

export default AppRouter;