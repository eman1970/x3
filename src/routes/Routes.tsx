import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { AccessoriesView } from '../view/navigationtabviews/accessories/AccessoriesView'
import { BrandsView } from '../view/navigationtabviews/brands/BrandsView'
import { ExpertisView } from '../view/navigationtabviews/expertis/ExpertisView'
import { NewsView } from '../view/navigationtabviews/news/NewsView'
import { ShopView } from '../view/navigationtabviews/shop/ShopView'


export const Routes = (props: { children: React.ReactChild }) => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const { children } = props

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setAuthUser({ username: localStorage.getItem('user') })
        }
    }, [])

    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route exact path={RoutingPath.signInView} component={SignInView} />
                <Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
                <Route exact path={RoutingPath.brandsView} component={BrandsView} />
                <Route exact path={RoutingPath.expertisView} component={ExpertisView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route component={HomeView} />

            </Switch>

        </BrowserRouter>
    )


}