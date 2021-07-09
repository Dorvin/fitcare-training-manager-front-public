import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    ListGroupItem, ListGroup
} from 'reactstrap';
import classnames from 'classnames';
import actions from "../store/actions";

class Exercise extends Component {
    state = {
        activeTab: '1',
    };

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    changeExerciseName = (workoutIndex, exerciseIndex, exerciseName) => {
        let newWorkouts = [
            ...this.props.workouts,
        ];
        newWorkouts[workoutIndex].exercise[exerciseIndex].name = exerciseName;
        this.props.onWorkoutRefresh(newWorkouts);
    };

    chest = [
        "Around the World",
        "Benchpress-Wide Grip",
        "Benchpress(Smith Machine)",
        "Benchpress(Cable)",
        "BenchPress(dumbbell)",
    ];

    back = [
        "Back Extension",
        "Back Extension(Machine)",
        "Bent Over One Arm Row(Dumbbell)",
        "Bent Over Row(Band)",
        "Bent Over Row(Barbell)",
    ];

    leg_q = [
        "Box Jump",
        "Box Squat",
        "Bulgarian Split Squat",
        "Deadlift(Band)",
        "Deadlift(Dumbbell)",
    ];

    leg_h = [
        "Box Jump",
        "Box Squat",
    ];

    hip = [
        "Box Jump",
        "Box Squat",
        "Bulgarian Split Squat",
        "Cable Pull Through",
    ];

    leg_c = [
        "Calf Press on the Leg Press",
        "Calf Press on seated LEg Press"
    ];

    core_ex = [
        "Ab Wheel",
        "Bicycle Crunch"
    ];

    render() {
        let workoutIndex = Number(this.props.match.params.workoutIndex);
        let exerciseIndex = Number(this.props.match.params.exerciseIndex);
        return (
            <div>
                {
                    this.props.login ? (this.props.user.new && <Redirect to="/me/update"/>) :
                        <Redirect to="/auth/login"/>
                }
                <div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Chest
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Back
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '3'})}
                                onClick={() => {
                                    this.toggle('3');
                                }}
                            >
                                Leg-Quadriceps
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '4'})}
                                onClick={() => {
                                    this.toggle('4');
                                }}
                            >
                                Leg-Hamstrings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '5'})}
                                onClick={() => {
                                    this.toggle('5');
                                }}
                            >
                                Hip-Glutes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '6'})}
                                onClick={() => {
                                    this.toggle('6');
                                }}
                            >
                                Leg-Calves
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '7'})}
                                onClick={() => {
                                    this.toggle('7');
                                }}
                            >
                                Core
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <ListGroup>
                                {
                                    this.chest.map((data, index) => (
                                        <ListGroupItem onClick={()=>{
                                            this.changeExerciseName(workoutIndex, exerciseIndex, data);
                                            this.props.history.replace(`/me/workout/detail/${workoutIndex}`);
                                        }}>{data}</ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                        <TabPane tabId="2">
                            <ListGroup>
                                {
                                    this.back.map((data, index) => (
                                        <ListGroupItem onClick={()=>{
                                            this.changeExerciseName(workoutIndex, exerciseIndex, data);
                                            this.props.history.replace(`/me/workout/detail/${workoutIndex}`);
                                        }}>{data}</ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                        <TabPane tabId="3">
                            <ListGroup>
                                {
                                    this.leg_q.map((data, index) => (
                                        <ListGroupItem onClick={()=>{
                                            this.changeExerciseName(workoutIndex, exerciseIndex, data);
                                            this.props.history.replace(`/me/workout/detail/${workoutIndex}`);
                                        }}>{data}</ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                        <TabPane tabId="4">
                            <ListGroup>
                                {
                                    this.leg_h.map((data, index) => (
                                        <ListGroupItem onClick={()=>{
                                            this.changeExerciseName(workoutIndex, exerciseIndex, data);
                                            this.props.history.replace(`/me/workout/detail/${workoutIndex}`);
                                        }}>{data}</ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                        <TabPane tabId="5">
                            <ListGroup>
                                {
                                    this.hip.map((data, index) => (
                                        <ListGroupItem onClick={()=>{
                                            this.changeExerciseName(workoutIndex, exerciseIndex, data);
                                            this.props.history.replace(`/me/workout/detail/${workoutIndex}`);
                                        }}>{data}</ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                        <TabPane tabId="6">
                            <ListGroup>
                                {
                                    this.leg_c.map((data, index) => (
                                        <ListGroupItem onClick={()=>{
                                            this.changeExerciseName(workoutIndex, exerciseIndex, data);
                                            this.props.history.replace(`/me/workout/detail/${workoutIndex}`);
                                        }}>{data}</ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                        <TabPane tabId="7">
                            <ListGroup>
                                {
                                    this.core_ex.map((data, index) => (
                                        <ListGroupItem onClick={()=>{
                                            this.changeExerciseName(workoutIndex, exerciseIndex, data);
                                            this.props.history.replace(`/me/workout/detail/${workoutIndex}`);
                                        }}>{data}</ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                        </TabPane>
                    </TabContent>
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
)(Exercise);

