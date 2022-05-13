import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import info from '../../assets/images/info-car.svg'
import Button from 'react-bootstrap/Button'
import "../../assets/css/info-section.css"

export const InfoSection = () => {
    return (
        <div className="info-section">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="info-sec-left">
                            <span>Premium bank</span>
                            <h2>Unlimited Transactions with zero fees</h2>
                            <p>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees</p>
                            <div className="info-sec-btn">
                                <button>Get Started</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="info-sec-right">
                            <img src={info} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
