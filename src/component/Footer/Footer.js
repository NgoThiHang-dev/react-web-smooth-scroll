import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../../assets/css/footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="content-footer">
                <Container fluid className="container-ft">
                    <Row>
                        <Col>
                            <div className="ft-about-us">
                                <p><strong>About us</strong></p>
                                <div className="ft-detail">
                                    <a href="#">How it works</a>
                                    <a href="#">Tesimonials</a>
                                    <a href="#">Careers</a>
                                    <a href="#">Investors</a>
                                    <a href="#">Terms of Service</a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="ft-contact-us">
                                <p><strong>Contact us</strong></p>
                                <div className="ft-detail">
                                    <a href="#">Contact</a>
                                    <a href="#">Support</a>
                                    <a href="#">Destinations</a>
                                    <a href="#">Sponsorships</a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="ft-contact-us">
                                <p><strong>Videos</strong></p>
                                <div className="ft-detail">
                                    <a href="#">Submit Video</a>
                                    <a href="#">Ambassadors</a>
                                    <a href="#">Agency</a>
                                    <a href="#">Influencer</a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="ft-contact-us">
                                <p><strong>Social Media</strong></p>
                                <div className="ft-detail">
                                    <a href="#">Instagram</a>
                                    <a href="#">Facebook</a>
                                    <a href="#">Youtube</a>
                                    <a href="#">Twitter</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="ft-copyright">
                            <p>Hang Ngo &copy; 2022</p>
                        </div>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
