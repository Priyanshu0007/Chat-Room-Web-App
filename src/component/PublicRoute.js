import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const PublicRoute = ({children,...routeProps}) => {
    const profile=false;
    if (profile) {
        return <Redirect to="/"></Redirect>
    }
  return (
    <Route {...routeProps}>
        {children}
    </Route>
  )
}

export default PublicRoute