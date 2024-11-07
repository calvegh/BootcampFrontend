import { useState } from "react"
import { login } from "../services/loginService";
import { useDispatch } from "react-redux";
import { save } from "../states/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

interface IForm {
    email: string;
    user: string,
    password: string,
    region: string,
    roles?: string[]
}
export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [validateCredentials, setValidateCredentials] = useState(true)
    if (login(form)) {
        const { user, region, email } = form
        dispatch(save({ user, region, email }))
        Navigate('/home')
    } else {
        setValidateCredentials(false)
    }
    const [form, setForm] = useState<IForm>({
        user: '',
        email: '',
        password: '',
        region: '',
        roles: [],
    })
    return (
        <>
            <form action=""></form>
            <h1>Login page</h1>
        </>
    )
}