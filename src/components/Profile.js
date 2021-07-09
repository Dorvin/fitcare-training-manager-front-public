import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {Row, Col, Container, Jumbotron, Button, ListGroup, ListGroupItem, Card, CardBody, CardHeader} from 'reactstrap';
import './Profile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars, faBirthdayCake, faRulerVertical, faWeight } from "@fortawesome/free-solid-svg-icons";
import actions from "../store/actions";
import Badge from "reactstrap/es/Badge";
import logo from '../fitcare.jpeg'
import CardTitle from 'reactstrap/lib/CardTitle';

class Profile extends Component{
    componentDidMount() {
        this.props.onProfileGet();
    }

    render() {
        return (
            <Container>
                {
                    this.props.login ? (this.props.user.new && <Redirect to="/me/update"/>) : <Redirect to="/auth/login"/>
                }
                <img src={logo} class="img-fluid"></img>
                <Jumbotron className="text-center mb-0">
                    
                    <Row>
                        <Col>
                        <Card className="mb-4 border-secondary">
                            <CardHeader className="mycardheader text-white">
                                <FontAwesomeIcon icon={faVenusMars} size="2x"/>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3"> 
                                    {this.props.user.sex=="male" ? "남성" : "여성"}
                                </CardTitle>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="mb-4 border-secondary">
                            <CardHeader className="mycardheader text-white">
                                <FontAwesomeIcon icon={faBirthdayCake} size="2x"/>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3"> 
                                {this.props.user.body_fat}%
                                </CardTitle>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card className="border-secondary">
                            <CardHeader className="mycardheader text-white"> 
                                <FontAwesomeIcon icon={faWeight} size="2x"/>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3"> 
                                    {this.props.user.weight}kg
                                </CardTitle>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="border-secondary">
                            <CardHeader className="mycardheader text-white">
                                <FontAwesomeIcon icon={faRulerVertical} size="2x"/>
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h3"> 
                                {this.props.user.height}cm
                                </CardTitle>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                            
                        
                    
                </Jumbotron>
                <Row>
                    <Col>
                        <div className='button-wrapper'>
                            <Button color="success" onClick={()=>{this.props.history.push('/me/update')}}>정보 수정</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className='button-wrapper'>
                            <Button color="warning" onClick={()=>{
                                this.props.onChangeInputProfileSex('');
                                this.props.onChangeInputProfileWeight('');
                                this.props.onChangeInputProfileHeight('');
                                this.props.onChangeInputProfileBf('');
                                this.props.onLogout();
                            }}>로그아웃</Button>
                        </div>
                    </Col>
                </Row>
                
                
                

                
            </Container>
        );
    }
}

export default connect(
    (state) => ({
        login: state.auth.login,
        user: state.profile.user,
    }),
    (dispatch) => ({
        onLogout: ()=>dispatch(actions.logout()),
        onProfileGet: ()=>dispatch(actions.profileGet()),
        onChangeInputProfileSex: (sex) => dispatch(actions.inputProfileSex(sex)),
        onChangeInputProfileWeight: (weight) => dispatch(actions.inputProfileWeight(weight)),
        onChangeInputProfileHeight: (height) => dispatch(actions.inputProfileHeight(height)),
        onChangeInputProfileBf: (bf) => dispatch(actions.inputProfileBf(bf)),
    })
)(Profile);

