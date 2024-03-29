import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
import './style.css';
const ContactContainer = () => {
    const myData = [
        { name: 'Facebook', link: '', text: 'Follow to my facebook.' },
        { name: 'Linkedin', link: '', text: 'Follow to my linkedin.' },
        { name: 'Twitter', link: '', text: 'Follow to my twitter.' },
        { name: 'StackOverFlow', link: '', text: 'Check out to my stackoverflow account.' },
        { name: 'Blog', link: '', text: ' my blog.' },
        { name: 'GitHub', link: '', text: ' my github account.' },
        { name: 'YouTube', link: '', text: 'my youtube channel.' },
        { name: 'Email', link: '', text: 'write to me a mail' }
    ]
    return (
        <div className='contactWrap'>
            <Container>
                <Row>
                    <Col>
                        <p>CONNECT WITH US</p>
                        <h1>Get in Touch</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='conectIcon'>
                        <ul className='socialIconsList'>
                            <li>
                                <a rel="noreferrer" href="" target="_blank">
                                    <BsFacebook />
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" href="" target="_blank">
                                    <BsLinkedin />
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" href="" target="_blank">
                                    <BsTwitter />
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" href="" target="_blank">
                                    <BsStackOverflow />
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" href="" target="_blank">
                                    <BsGoogle />
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" href="" target="_blank">
                                    <BsGithub />
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" href="" target="_blank">
                                    <BsYoutube />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup className='contactList'>
                            {
                                myData && myData.length > 0 ? myData.map((item) => {
                                    return (
                                        <ListGroup.Item key={item.name}>
                                            <span>{item.text}</span>
                                            <a href={item.link} rel="noreferrer" target="_blank">
                                                {item.link}
                                            </a>
                                        </ListGroup.Item>
                                    )
                                }) : ''
                            }

                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactContainer;