import './DesktopNavigation.css'
import Logotype from '../../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs'

export const DesktopNavigation = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useContext(UserContext)

    const displaySignInButtonOnAuthetication = () => {

        return authUser?.username
            ? <div className="profile"><Profile /></div>
            : <span className="signInButton" onClick={() => history.push(RoutingPath.signInView)}>signin</span>
    }

    return (
        <div className="desktopNavigationWrapper">

            <img className="navigationLogotype"
                src={Logotype}
                alt={''} />
                <DesktopNavigationTabs />

<div className="desktopNavigationTabs">
    {displaySignInButtonOnAuthetication()}
    </div>
           
        </div>
    )
}

 
