import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {Button, Card, CardText, CardTitle} from "reactstrap";
import './HistoryPage.css'
import actions from "../store/actions";

class HistoryPage extends Component {
    componentDidMount() {
        this.props.onHistoryGet();
    }

    render() {
        return (
            <div>
                {
                    this.props.login ? (this.props.user.new && <Redirect to="/me/update"/>) :
                        <Redirect to="/auth/login"/>
                }
                {
                    this.props.workoutHistory.map((data, index) => (
                        <Card key={index} body className="history border-primary">
                            <CardTitle>
                                <h5>{`${data.name}`}</h5>
                                <h6>{`at ${data.date}`}</h6>
                            </CardTitle>
                            <CardText>
                                <div id="flex-container">
                                    <div id="label">Exercise</div>
                                    <div id="label">Best Set</div>
                                </div>
                                {
                                    data.exercise.map((exercise, exIndex) => (
                                        <div key={exIndex} id="flex-container">
                                            <div>{exercise.name}</div>
                                            <div>{exercise.best}</div>
                                        </div>
                                    ))
                                }
                            </CardText>
                        </Card>
                    ))
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        login: state.auth.login,
        user: state.profile.user,
        workoutHistory: state.history.history,
    }),
    (dispatch) => ({
        onHistoryGet: () => dispatch(actions.historyGet()),
    })
)(HistoryPage);

