import React,{Component} from "react";
import Movies from "./components/movies";
import {Switch,Route, Redirect} from "react-router-dom";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import Login from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import MoviesForm from "./components/moviesForm";
import Customers from "./components/customers";
import Logout from "./components/logout";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getCurrentUser}from "./services/authService"
class App extends Component{
  state={user:"" }
  componentDidMount() {
   const user= getCurrentUser()
    this.setState({user})
    
  }
  render(){

return(
  <div className="App">
    <Navbar user={this.state.user}/>
    <ToastContainer/>
    <main className="container">
      <Switch>
      <Route path="/movies/:id" component={MoviesForm}/>
        <Route path="/movies" render={props=><Movies {...props}  user={this.state.user}/>}/>
        <Route path="/notfound" component={NotFound}/>
        <Route path="/rentals" component={Rentals}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/registerForm" component={RegisterForm}/>
        <Route path="/customers" component={Customers}/>
        <Redirect from="/"  exact to ="/movies"/>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>

    </div>

)
}
}
export default App;