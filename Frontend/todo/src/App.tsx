import React from 'react';
import Navigation from './Components/Navigation';
import { Route, Switch } from 'react-router-dom';
import ListTodo from './Components/ListTodo';
import Todo from './Components/Todo';
import Footer from './Components/Footer';

const Home=()=>{
  return(
    <>
    <h2 className="text-danger text-center mb-4 mt-4" >Welcome To Todo Application System</h2>
    <h3> &nbsp;About Project : </h3>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;The Todo Management Application is a web-based platform designed to help users organize and manage their tasks effectively. The application supports basic CRUD operations (Create, Read, Update, Delete) for tasks and includes features for marking tasks as complete or incomplete. The primary goal is to provide users with a simple and intuitive interface to enhance their productivity</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  )
}


function App() {
  return (
    <>
    
    <Navigation/>
    
    <Switch>
    <Route exact path = "/home"><Home/></Route>
    <Route exact path="/listTodo"><ListTodo/></Route>
    <Route exact path="/edit-todo/:id"><Todo/></Route>
    <Route exact path="/todo"><ListTodo/></Route>
    <Route exact path="/add-todo"><Todo/></Route>
    </Switch>

    <Footer/>

    </>
  );
}

export default App;
