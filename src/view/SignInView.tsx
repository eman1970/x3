
import { useState, useContext } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'


export const SignInView = () => {
    const history = useHistory()
    const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({ username: '', password: '' })
    const [authUser, setAuthUser] = useContext(UserContext)

    const signIn = () => {
        localStorage.setItem('user', loginCredentials.username)
        setAuthUser(loginCredentials)
        history.push(RoutingPath.homeView)

    }

    return (

        <div>
            <br />

            <form>
                <input placeholder='username'
                    onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /><br />
                <input placeholder='password'
                    onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value })} />
                <button onClick={() => signIn()}>Sign in</button>


            </form>

        </div>


    )
}