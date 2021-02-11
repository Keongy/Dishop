import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Error } from './App/ui/Error';
import { Home } from './App/Home';
import { Series } from './App/Series';
import { Movies } from './App/Movies';


export function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/series" component={Series} />
        <Route exact path="/movies" component={Movies} />
        <Route component={Error} />
      </Switch>
    </main>
  )

}

