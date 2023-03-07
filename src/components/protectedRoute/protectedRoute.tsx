import React, {FC, PropsWithChildren, useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useNavigate} from "react-router-dom";

const ProtectedRoute: FC<PropsWithChildren> = ({children}) => {
    const {isAuth, loading} = useSelector((state: RootState) => state.auth);
    const navigation = useNavigate();

    useEffect(() => {
        if (!isAuth && !loading) {
            navigation('/auth/login');
        }
    }, [isAuth, loading])

    if (loading) {
        return <>loading...</>
    } else {
        return <>{children}</>
    }
}

export default ProtectedRoute;