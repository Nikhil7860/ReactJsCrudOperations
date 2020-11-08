import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/pages/Home';
import AboutUs from './Components/pages/AboutUs';
import Login from './Components/pages/Login';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './Components/pages/NotFound';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/users/add" component={AddUser} />
          <Route path="/users/edit/:id" component={EditUser} />  {/*// to show the data of a particular person with there id  */}
          <Route path="/users/:id" component={ViewUser} />

          <Route component={NotFound} />           {/* if page doesnot exit in the website  */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


