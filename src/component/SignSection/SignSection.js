import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../../assets/css/sign-section.css"
import sign from "../../assets/images/sign.svg"

export const SignSection = () => {
    return (
        <div className="sign-section">
            <Container fluid>
                <Row>
                    <Col xs={12} xl={6}>
                        <div className="sign-sec-left">
                            <span>Premium bank</span>
                            <h2>Unlimited Transactions with zero fees</h2>
                            <p>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees</p>
                            <div className="sign-sec-btn">
                                <button>Get Started</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="sign-sec-right">
                            <img src={sign} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
