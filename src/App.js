import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemsListView from './components/items/ItemsListView';
import ItemDetailView from './components/items/ItemDetailView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ItemsListView}/>
          <Route path='/items/:id' component={ItemDetailView}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
