import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import carnage from '../assets/img/carnage.png';


const Banner = () => {

const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = [ "(Web Developer)", "(Graphic Designer)", "(Video Editor)" ];
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta)

    return () => { clearInterval(ticker);}
}, [text])

const tick = () => {
    let i =loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if(isDeleting) {
        setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updateText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && updateText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
}

    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hey, I am Yash '}<span className="wrap">{text}</span></h1>
                        <p>I am a full-stack developer and I love working with all kinds of technologies. My passion for learning new things drives me to explore and combine different technologies, which results in great solutions for both clients and employers alike.</p>
                        <button onClick={() => console.log('connect')}>Lets Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={carnage} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Banner;