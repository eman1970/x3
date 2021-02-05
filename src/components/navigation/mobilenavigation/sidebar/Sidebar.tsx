import React from 'react'
import { useHistory } from 'react-router-dom'
import './Sidebar.css'
import RoutingPath from '../../../../routes/RoutingPath'
 
 


export const Sidebar = (props: { drawerIsOpen: boolean, drawerHandler: Function }) => {
    const history = useHistory()
    const handleRedirect = (selectedView: string) => {
        history.push(selectedView)
        props.drawerHandler(false)
        

    }
    

    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <button onClick={() => props.drawerHandler(false)}>CLOSE sidebar</button>

            <ul className="ulTabsWrapper2">
                <li className="liTabs" onClick={() => handleRedirect(RoutingPath.accessoriesView)}>accessories</li>
                <li className="liTabs" onClick={() => history.push(RoutingPath.brandsView)}>brands</li>
                <li className="liTabs" onClick={() => history.push(RoutingPath.expertisView)}>expertis</li>
                <li className="liTabs" onClick={() => history.push(RoutingPath.newsView)}>news</li>
                <li className="liTabs" onClick={() => history.push(RoutingPath.shopView)}>shop</li>

            </ul>


        </div>
    )
}

