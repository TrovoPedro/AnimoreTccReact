import React from 'react'

import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
export const UserContext = React.createContext();
import {useNavigate} from 'react-router-dom'

export const UserStorage = ({children}) => {
    const navigate = useNavigate()


    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    async function getUser(token){
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json)
        setLogin(true)
        console.log(json)

    }


    async function userLogin(username, password){
        try {
            setError(null);
            setLoading(true);
        const {url, options} = TOKEN_POST({username, password});
        const tokenRes = await fetch(url, options);
        if(!tokenRes.ok) throw new Error(`Error: Usuario invalido`);
        console.log(tokenRes)
        const {token} = await tokenRes.json();
        window.localStorage.setItem('token', token)
        await getUser(token)
        navigate('/conta')
    }
    catch (err) {
        setError(err.message);
        setLogin(false)

    }
    finally{
        setLoading(false)

    }
    }

    const userLogout = React.useCallback(async function() {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
        navigate('/Login')
    }, [])
    
    React.useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token');
            if (token) {
                try{
                    setError(null)
                    setLoading(true)
                const {url, options} = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options); 
                    if(!response.ok) throw new Error('Token invalido')
                   await getUser(token);
                }
                catch(err) {

                }
                finally {
                    setLoading(false)

                }
                   
                
                } else {
                    setLogin(false)
                }
            } autoLogin()

    }, [])

  return (
    <UserContext.Provider value={{userLogin, data, userLogout, error, loading, login}} >
        {children}
    </UserContext.Provider>
  )
}

