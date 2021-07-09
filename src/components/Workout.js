import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../store/actions";
import {Button, Card, CardText, CardTitle, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './Workout.css';

class Workout extends Component {
    componentDidMount() {
        this.props.onWorkoutGet();
    }

    formatDate = () => {
        let d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    };

    removeWorkout = (index) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts.splice(index, 1);
        this.props.onWorkoutPost(newWorkouts);
    };

    render() {
        return (
            <div>
                {
                    this.props.login ? (this.props.user.new && <Redirect to="/me/update"/>) :
                        <Redirect to="/auth/login"/>
                }
                <div className="button-wrapper-new-work">
                    <Button size="lg" id="new-workout-button" color="primary" onClick={() => {
                        let newWorkouts = [
                            ...this.props.workouts,
                        ];
                        let length = newWorkouts.length;
                        let nowDate = this.formatDate();
                        newWorkouts.push({
                            "name": "",
                            "date": nowDate,
                            "exercise": [
                                {
                                    name: "",
                                    type: "weight",
                                    set: [
                                        {
                                            kg: 0,
                                            reps: 0,
                                        }
                                    ]
                                }
                            ]
                        });
                        this.props.onWorkoutRefresh(newWorkouts);
                        console.log(newWorkouts);
                        this.props.history.push(`/me/exercise/${length}/0`);
                    }}>
                        새 운동목록 만들기
                    </Button>
                </div>
                {
                    this.props.workouts.map((data, index) => (
                        <Card key={index} className="border-info" id="card" body onClick={() => {
                            this.props.history.push(`/me/workout/detail/${index}`)
                        }}>
                            <CardTitle>
                                <Row>
                                    <Col xs="10"><h5>{`${data.name}`}</h5>
                                    </Col>
                                    <Col xs="2">
                                        <Button onClick={(e) => {e.cancelBubble = true;if (e.stopPropagation) e.stopPropagation(); this.removeWorkout(index)}} 
                                        size="sm" color="danger"><FontAwesomeIcon icon={faTimes}/></Button>
                                    </Col>
                                </Row>
                                
                            </CardTitle>
                            <CardText>
                                <div id="label">Exercise</div>
                                {
                                    data.exercise.map((exercise, exIndex) => (
                                        <div key={exIndex}>{`${exercise.name}`}</div>
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
        workouts: state.workout.workouts,
    }),
    (dispatch) => ({
        onWorkoutGet: () => dispatch(actions.workoutGet()),
        onWorkoutPost: (workouts) => dispatch(actions.workoutPost(workouts)),
        onWorkoutRefresh: (workouts) => dispatch(actions.workoutRefresh(workouts)),
    })
)(Workout);
