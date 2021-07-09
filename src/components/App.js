import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import Notfound from "./Notfound";
import Navigation from "./Navigation";
import Workout from "./Workout";
import Exercise from "./Exercise";
import HistoryPage from "./HistoryPage";
import Update from "./Update";
import WorkoutDetail from "./WorkoutDetail";

//App component manages routing
class App extends Component {
    componentDidMount() {
        //api networking here
    }

    render() {
        return (
            <div className="App">
                <Route path="/me" component={Navigation}/>
                <Switch>
                    <Route path="/auth/register" component={Register}/>
                    <Route path="/auth/login" component={Login}/>
                    <Route path="/me/profile" component={Profile}/>
                    <Route path="/me/update" component={Update}/>
                    <Route path="/me/workout/detail/:workoutIndex" component={WorkoutDetail}/>
                    <Route path="/me/workout" component={Workout}/>
                    <Route path="/me/exercise/:workoutIndex/:exerciseIndex" component={Exercise}/>
                    <Route path="/me/history" component={HistoryPage}/>
                    <Route exact path="/" component={Login}/>
                    <Route component={Notfound}/>
                </Switch>
            </div>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(App);

