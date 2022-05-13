import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import "../../assets/css/navbar.css"
import 'boxicons'

export const Navbar = () => {
    return (
        <div className="top-header">
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <div className="logo">
                            <h2>Dolla</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="main-menu">
                            <ul className="ul-main-nav">
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#product">Discover</a>
                                </li>
                                <li>
                                    <a href="">Services</a>
                                </li>
                                <li>
                                    <a href="">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="nav-sign-in">
                            <button>Sign in</button>
                        </div>
                        {/* <div className="menu-icon">
                            <box-icon name='menu' className='bx-lg' size='lg' color='#f9f9f9'></box-icon>
                            <i class='bx bx-menu bx-lg'></i>
                        </div> */}
                    </Col>

                </Row>
            </Container>



        </div >
    );
};
