import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {
    Button,
    ListGroup,
    ListGroupItem,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    ButtonGroup,
    Card,
    CardBody,
    Jumbotron,
    Container,
    CardHeader,
    Row,
    Col
} from 'reactstrap';
import './Update.css'
import actions from "../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars, faBirthdayCake, faRulerVertical, faWeight } from "@fortawesome/free-solid-svg-icons";

class Update extends Component {
    render() {
        return (
            <Container>
                {
                    !this.props.login && <Redirect to="/auth/login"/>
                }
                <Jumbotron>
                    <Card className="text-center">
                        <CardHeader className="mycardheader">
                            <h3>정보를 입력해주세요</h3>
                        </CardHeader>
                        <CardBody>
                            <Row className="my-4">
                                <Col>
                                    <Button size="lg" color="primary" onClick={() => this.props.onChangeInputProfileSex("male")}>남성</Button>
                                </Col>
                                <Col>
                                    <Button size="lg" color="danger" onClick={() => this.props.onChangeInputProfileSex("female")}>여성</Button>
                                </Col>
                            </Row>
                            <Row className="my-5">
                                <Col>
                                <InputGroup size="lg">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><FontAwesomeIcon icon={faWeight}/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input value={this.props.inputProfileWeight} placeholder="몸무게(kg)"
                                        onChange={(e) => this.props.onChangeInputProfileWeight(e.target.value)}/>
            
                                </InputGroup>
                                </Col>
                            </Row>     
                            <Row className="my-5">
                                <Col>
                                <InputGroup size="lg">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><FontAwesomeIcon icon={faRulerVertical}/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input value={this.props.inputProfileHeight} placeholder="키(cm)"
                                        onChange={(e) => this.props.onChangeInputProfileHeight(e.target.value)}/>
                                    
                                </InputGroup>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                <InputGroup size="lg">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText><FontAwesomeIcon icon={faBirthdayCake}/></InputGroupText>
                                    </InputGroupAddon>
                                    <Input value={this.props.inputProfileBf} placeholder="체지방률(%)"
                                        onChange={(e) => this.props.onChangeInputProfileBf(e.target.value)}/>
                                    
                                </InputGroup>
                                </Col>
                            </Row>
                         
                                
                        </CardBody>
                    </Card>
                </Jumbotron>
                
                <div className='button-wrapper'>
                    <Button color="success" onClick={() => {
                        let Nweight = Number(this.props.inputProfileWeight);
                        let Nheight = Number(this.props.inputProfileHeight);
                        let Nbf = Number(this.props.inputProfileBf);
                        if (Nweight && Nheight && Nbf) {
                            this.props.onProfilePost({
                                sex: this.props.inputProfileSex,
                                weight: Nweight,
                                height: Nheight,
                                body_fat: Nbf,
                            });
                            this.props.history.replace('/me/profile');
                        } else {
                            alert("숫자를 입력해주세요");
                        }
                    }}>정보 저장</Button>
                </div>
            </Container>
        );
    }
}

export default connect(
    (state) => ({
        login: state.auth.login,
        token: state.auth.token,
        inputProfileSex: state.input.inputProfileSex,
        inputProfileWeight: state.input.inputProfileWeight,
        inputProfileHeight: state.input.inputProfileHeight,
        inputProfileBf: state.input.inputProfileBf,
    }),
    (dispatch) => ({
        onChangeInputProfileSex: (sex) => dispatch(actions.inputProfileSex(sex)),
        onChangeInputProfileWeight: (weight) => dispatch(actions.inputProfileWeight(weight)),
        onChangeInputProfileHeight: (height) => dispatch(actions.inputProfileHeight(height)),
        onChangeInputProfileBf: (bf) => dispatch(actions.inputProfileBf(bf)),
        onProfilePost: (user) => dispatch(actions.profilePost(user)),
    })
)(Update);
