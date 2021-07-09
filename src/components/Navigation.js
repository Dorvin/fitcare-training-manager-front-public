import React, {Component} from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faDumbbell, faChartLine } from "@fortawesome/free-solid-svg-icons";
import './Navigation.css';

class Navigation extends Component {
    state = {menu: "profile"};
    changeSite = (a) => {
        this.setState({menu: a})
    }
    decorClass = (a) => {
        let base="col text-center border-secondary border-bottom py-2"
        if(a==this.state.menu)
            base += "  "
        else
            base += " text-secondary "
        
        if(a=="profile")
            base += " border-right "
        else if(a=="history")
            base += " border-left "

        return base
    }
    
    
    render() {
        return (
                <Navbar className="row">
                        <NavLink tag={RRNavLink} onClick={() => this.changeSite("profile")} exact to="/me/profile" className={this.decorClass("profile")}>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faUserAlt} size="2x"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    프로필
                                </Col>
                            </Row>
                        </NavLink>
                        
                        <NavLink tag={RRNavLink} onClick={() => this.changeSite("workout")} exact to="/me/workout" className={this.decorClass("workout")}>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faDumbbell} size="2x"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    운동하기
                                </Col>
                            </Row>
                        </NavLink>
                        <NavLink tag={RRNavLink} onClick={() => this.changeSite("history")} exact to="/me/history" className={this.decorClass("history")}>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faChartLine} size="2x"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    운동기록
                                </Col>
                            </Row>
                        </NavLink>
                </Navbar>
                
        );
    }
}

export default Navigation;
