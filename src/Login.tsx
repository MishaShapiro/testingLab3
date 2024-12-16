import React, { useEffect, useState } from 'react';
import { getUserData } from './utils/utils';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    type IType = string | null

    const [pass, setPass] = useState<string>("")
    const [login, setLogin] = useState<string>("")

    const [data, setData] = useState<IType>(null)
    const [isBtnClick, setIsBtnClick] = useState<boolean>(false)
    const [isClick, setIsClick] = useState<boolean>(false)

    useEffect(() => {
        setData(getUserData({"mail": login, "pass": pass}))
    }, [isClick])

    useEffect(() => {
        if (data) {
            navigate('/profile')
        }
    }, [data])

    return (
        <div>   
            <div>
            <p>Логин</p>
            <input name="email" onChange={(e) => {setLogin(e.target.value)}} value={login}></input>
            <p>Пароль</p>
            <input name="password" type="password" onChange={(e) => {setPass(e.target.value)}} value={pass}></input>
            </div>
            <button id="submit" onClick={() => {
                setIsClick(!isClick)
                setIsBtnClick(true)
            }}>Click</button>
            {isBtnClick && 
            <p>
                {data ? data : "Incorrect data :("}
            </p>}
        </div>
    );
};

export default Login;