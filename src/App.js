import React from "react";
import Movies from "./components/movies";
import {Switch,Route, Redirect} from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import Login from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MoviesForm from "./components/moviesForm";
import Customers from "./components/customers";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
function App(){
return(
  <div className="App">
    <Navbar/>
    <ToastContainer/>
    <main className="container">
      <Switch>
      <Route path="/movies/new" component={MoviesForm}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/notfound" component={NotFound}/>
        <Route path="/rentals" component={Rentals}/>
        <Route path="/login" component={Login}/>
        <Route path="/registerForm" component={RegisterForm}/>
        <Route path="/customers" component={Customers}/>
        <Redirect from="/"  exact to ="/movies"/>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>

    </div>
  
)
}
export default App;