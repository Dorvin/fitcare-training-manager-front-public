import React, {Component} from 'react';
import {Alert, Button, Card, CardBody, Col, Container, Jumbotron, Row} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import actions from "../store/actions";
import './Register.css'
import logo from '../fitcare.jpeg';

class Register extends Component{
    render() {
        // this.props.onChangeInputRegisterEmail('');
        // this.props.onChangeInputRegisterPassword1('');
        // this.props.onChangeInputRegisterPassword1('');
        return (
            <Container className="register-container">
                {
                    this.props.login && <Redirect to="/me/profile"/>
                }
                <img src={logo} class="img-fluid Fitcare-login"></img>
                    <Jumbotron>
                        <Card>
                            <CardBody>
                                <AvForm
                                    onValidSubmit={() => {
                                        this.props.onRegister({
                                            email: this.props.inputRegisterEmail,
                                            password1: this.props.inputRegisterPassword1,
                                            password2: this.props.inputRegisterPassword2,
                                        });
                                        // this.props.onChangeInputRegisterEmail('');
                                        // this.props.onChangeInputRegisterPassword1('');
                                        // this.props.onChangeInputRegisterPassword1('');
                                        console.log(this.props);
                                    }}
                                    onInvalidSubmit={() => {
                                        alert("형식에 맞게 입력해주세요");
                                    }}
                                >
                                    <AvField className="text-center"
                                        name="email"
                                        label="이메일"
                                        type="text"
                                        validate={{
                                            required: {
                                                value: true,
                                                errorMessage: "이메일을 형식에 맞게 입력해주세요"
                                            },
                                            email: {
                                                value: true,
                                                errorMessage: "이메일을 형식에 맞게 입력해주세요"
                                            },
                                        }}
                                        onChange={(e) => this.props.onChangeInputRegisterEmail(e.target.value)}
                                    />
                                    <AvField className="text-center"
                                        name="password1"
                                        label="비밀번호"
                                        type="password"
                                        validate={{
                                            required: {
                                                value: true,
                                                errorMessage: "비밀번호를 입력해주세요"
                                            },
                                            pattern: {
                                                value: "^[A-Za-z0-9]+$",
                                                errorMessage:
                                                    "비밀번호는 영어와 숫자만으로 입력해주세요"
                                            },
                                            minLength: {
                                                value: 6,
                                                errorMessage: "비밀번호는 6글자~16글자 사이로 입력해주세요"
                                            },
                                            maxLength: {
                                                value: 16,
                                                errorMessage: "비밀번호는 6글자~16글자 사이로 입력해주세요"
                                            }
                                        }}
                                        onChange={(e) => this.props.onChangeInputRegisterPassword1(e.target.value)}
                                    />
                                    <AvField className="text-center"
                                        name="password2"
                                        label="비밀번호 확인"
                                        type="password"
                                        validate={{
                                            required: {
                                                value: true,
                                                errorMessage: "비밀번호를 입력해주세요"
                                            },
                                            pattern: {
                                                value: "^[A-Za-z0-9]+$",
                                                errorMessage:
                                                    "비밀번호는 영어와 숫자만으로 입력해주세요"
                                            },
                                            minLength: {
                                                value: 6,
                                                errorMessage: "비밀번호는 6글자~16글자 사이로 입력해주세요"
                                            },
                                            maxLength: {
                                                value: 16,
                                                errorMessage: "비밀번호는 6글자~16글자 사이로 입력해주세요"
                                            }
                                        }}
                                        onChange={(e) => this.props.onChangeInputRegisterPassword2(e.target.value)}
                                    />
                                    <Button id="submit">회원가입</Button>
                                </AvForm>
                            </CardBody>
                        </Card>
                        <br/>
                        <Link to="/auth/login">로그인</Link>
                    </Jumbotron>
                    <Alert className="alert-warning">
                    자사에서 제공받는 본인의 개인정보를 수집․이용하거나 제3자에게 제공하는 경우에는 「개인정보보호법」 제15조제1항제1호,
                    제17조제1항제1호, 제22조제3항, 제24조제1항제1호에 따라 본인의 동의를 얻어야 합니다. 이에 본인은 자사가 본인의 개인정보를 수집․이용 또는 제공하는 것에
                    동의합니다.
                    </Alert>
            </Container>
        );
    }
}

export default connect(
    (state) => ({
        inputRegisterEmail: state.input.inputRegisterEmail,
        inputRegisterPassword1: state.input.inputRegisterPassword1,
        inputRegisterPassword2: state.input.inputRegisterPassword2,
        login: state.auth.login,
    }),
    (dispatch) => ({
        onChangeInputRegisterEmail: (value) => dispatch(actions.inputRegisterEmail(value)),
        onChangeInputRegisterPassword1: (value) => dispatch(actions.inputRegisterPassword1(value)),
        onChangeInputRegisterPassword2: (value) => dispatch(actions.inputRegisterPassword2(value)),
        onRegister: (user) => dispatch(actions.register(user)),
    })
)(Register);
