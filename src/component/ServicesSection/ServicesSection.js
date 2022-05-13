import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../../assets/css/services-section.css"
import imgservices from "../../assets/images/services-pig.svg"

export const ServicesSection = () => {
    return (
        <div className="services-section">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="services-sec-left">
                            <img src={imgservices} />
                        </div>
                    </Col>
                    <Col>
                        <div className="services-sec-left">
                            <span>Premium bank</span>
                            <h2>Unlimited Transactions with zero fees</h2>
                            <p>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees</p>
                            <div className="services-sec-btn">
                                <button>Get Started</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
