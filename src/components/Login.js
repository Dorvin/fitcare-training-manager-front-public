import React, {Component} from 'react';
import './Login.css';
import {Container, Row, Col, Jumbotron, Card, CardBody, Button, Alert} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import actions from '../store/actions';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import logo from '../fitcare.jpeg';
import auth from '../oauth2.png';


class Login extends Component {
    render() {
        // this.props.onChangeInputLoginEmail('');
        // this.props.onChangeInputLoginPassword('');
        return (
            <Container className="login-container">
                {
                    this.props.login && <Redirect to="/me/profile"/>
                }
                <img src={logo} class="img-fluid Fitcare-login"></img>
                    <Jumbotron className="fitcare-jumbo">
                    <Card>
                        <CardBody>
                            <AvForm
                                onValidSubmit={() => {
                                    this.props.onLogin({
                                        email: this.props.inputLoginEmail,
                                        password: this.props.inputLoginPassword,
                                    });
                                    // this.props.onChangeInputLoginEmail('');
                                    // this.props.onChangeInputLoginPassword('');
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
                                    onChange={(e) => this.props.onChangeInputLoginEmail(e.target.value)}
                                />
                                <AvField className="text-center"
                                    name="password"
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
                                    onChange={(e) => this.props.onChangeInputLoginPassword(e.target.value)}
                                />
                                <Row>
                                    <Col><Button id="submit">로그인</Button></Col>
                                </Row>
                                <Row>
                                    <Col><img src={auth} class="img-fluid mt-4 px-5"></img></Col>
                                </Row>
                                
                            </AvForm>
                        </CardBody>
                    </Card>
                    <br/>
                    <Link to="/auth/register">회원가입</Link>
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
        inputLoginEmail: state.input.inputLoginEmail,
        inputLoginPassword: state.input.inputLoginPassword,
        login: state.auth.login,
    }),
    (dispatch) => ({
        onChangeInputLoginEmail: (value) => dispatch(actions.inputLoginEmail(value)),
        onChangeInputLoginPassword: (value) => dispatch(actions.inputLoginPassword(value)),
        onLogin: (user) => dispatch(actions.login(user)),
    })
)(Login);
