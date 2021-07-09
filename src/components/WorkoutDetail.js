import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import actions from "../store/actions";
import {Button, Card, CardText, CardTitle, Input, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './WorkoutDetail.css';

class WorkoutDetail extends Component {
    changeWorkoutName = (index, name) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts[index].name = name;
        this.props.onWorkoutRefresh(newWorkouts);
    };

    addExercise = (index) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts[index].exercise.push({
            name: "",
            type: "weight",
            set: [
                {
                    kg: 0,
                    reps: 0,
                }
            ]
        });
        this.props.onWorkoutRefresh(newWorkouts);
    };

    removeExercise = (workoutIndex, exerciseIndex) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts[workoutIndex].exercise.splice(exerciseIndex, 1);
        this.props.onWorkoutRefresh(newWorkouts);
    };

    addSet = (workoutIndex, exerciseIndex) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts[workoutIndex].exercise[exerciseIndex].set.push({
            kg: 0,
            reps: 0,
        });
        this.props.onWorkoutRefresh(newWorkouts);
    };

    removeSet = (workoutIndex, exerciseIndex, setIndex) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts[workoutIndex].exercise[exerciseIndex].set.splice(setIndex, 1);
        this.props.onWorkoutRefresh(newWorkouts);
    };

    changeSetKg = (workoutIndex, exerciseIndex, setIndex, kg) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts[workoutIndex].exercise[exerciseIndex].set[setIndex].kg = kg;
        this.props.onWorkoutRefresh(newWorkouts);
    };

    changeSetReps = (workoutIndex, exerciseIndex, setIndex, reps) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts[workoutIndex].exercise[exerciseIndex].set[setIndex].reps = reps;
        this.props.onWorkoutRefresh(newWorkouts);
    };


    render() {
        let targetIndex = Number(this.props.match.params.workoutIndex);
        let targetWorkout = this.props.workouts[targetIndex];
        return (
            <div>
                {
                    this.props.login ? (this.props.user.new && <Redirect to="/me/update"/>) :
                        <Redirect to="/auth/login"/>
                }
                <Input id="workout-name" className="border-info" placeholder="운동 목록 이름" value={targetWorkout.name} onChange={(e) => {
                    this.changeWorkoutName(targetIndex, e.target.value);
                }}/>
                {
                    targetWorkout.exercise.map((data, index) => (
                        <Card key={index} body id="card-detail" className="my-3 border-danger">
                            <CardTitle>
                                <Row>
                                    <Col xs="7">
                                    <span id="exName">{data.name}</span>
                                    </Col>
                                    <Col xs="3">
                                        <Button color='primary' onClick={() => {
                                            this.props.history.push(`/me/exercise/${targetIndex}/${index}`)
                                        }}>운동 선택</Button>
                                    </Col>
                                    <Col xs="2">
                                        <Button size="sm" color='danger' onClick={() => {
                                            this.removeExercise(targetIndex, index)
                                        }}><FontAwesomeIcon icon={faTimes}/></Button>
                                    </Col>
                                </Row>
                            </CardTitle>
                            <CardText>
                                {
                                    data.set.map((set, setIndex) => (
                                        <div key={setIndex}>
                                            <div class="d-flex justify-content-start">
                                                <h5 id="set-num">{`set ${setIndex + 1}`}</h5>
                                                <Button className="m-2" size="sm" color='danger' onClick={() => {
                                                    this.removeSet(targetIndex, index, setIndex)
                                                }}><FontAwesomeIcon icon={faTimes}/></Button>
                                            </div>

                                            
                                            <Row>
                                                <Col>
                                                <Input id="set-input" value={set.kg} onChange={(e) => {
                                                    let number = Number(e.target.value);
                                                    if (!Number.isNaN(number)) {
                                                        this.changeSetKg(targetIndex, index, setIndex, number);
                                                    } else {
                                                        alert("숫자만 입력하세요");
                                                    }
                                                }}/>
                                                </Col>
                                                <Col>
                                                <p id="set-label">kg</p>
                                                </Col>

                                                <Col>
                                                <Input id="set-input" value={set.reps} onChange={(e) => {
                                                    let number = Number(e.target.value);
                                                    if (!Number.isNaN(number)) {
                                                        this.changeSetReps(targetIndex, index, setIndex, number);
                                                    } else {
                                                        alert("숫자만 입력하세요");
                                                    }
                                                }}/>
                                                </Col>
                                                <Col>
                                                <p id="set-label">reps</p>
                                                </Col>
                                            </Row>

                                        </div>
                                    ))
                                }
                                <div id="button-flex">
                                    <Button color="info" onClick={() => {
                                        this.addSet(targetIndex, index);
                                    }}>세트 추가</Button>
                                </div>
                            </CardText>
                        </Card>
                    ))
                }
                <div id="add-save-flex">
                    <Button color='secondary' onClick={() => {
                        let length = targetWorkout.exercise.length;
                        this.addExercise(targetIndex);
                        this.props.history.push(`/me/exercise/${targetIndex}/${length}`);
                    }}>운동 추가</Button><br/>
                    <Button color='success' onClick={() => {
                        this.props.onWorkoutPost(this.props.workouts);
                        this.props.history.replace('/me/workout');
                    }}>저장</Button>
                </div>
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
)(WorkoutDetail);
