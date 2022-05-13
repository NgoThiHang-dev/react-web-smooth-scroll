import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../../assets/css/our-services.css"
import info from '../../assets/images/info-car.svg'

export const OurServices = () => {
    return (
        <div className="our-services">
            <h2>Our Services</h2>
            <div className="services-content">
                <Container>
                    <Row>
                        <Col>
                            <div className="services-box">
                                <img src={info} />
                                <div className="services-title">
                                    <p><strong>Reduce Expenses</strong></p>
                                    <p>We help reduce your fees and increase your overall revenue</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="services-box">
                                <img src={info} />
                                <div className="services-title">
                                    <p><strong>Reduce Expenses</strong></p>
                                    <p>We help reduce your fees and increase your overall revenue</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="services-box">
                                <img src={info} />
                                <div className="services-title">
                                    <p><strong>Reduce Expenses</strong></p>
                                    <p>We help reduce your fees and increase your overall revenue</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
