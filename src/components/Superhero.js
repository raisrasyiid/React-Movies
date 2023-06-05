import { Container, Row, Col, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import antman from '../assets/images/superhero/antman.jpg'
import avenger from '../assets/images/superhero/avenger.jpg'
import batman from '../assets/images/superhero/batman.jpg'
import robinhood from '../assets/images/superhero/robinhood.jpg'
import spiderman from '../assets/images/superhero/spiderman-cover.jpg'
import superman from '../assets/images/superhero/superman.jpg'


const Superhero = () => {
    return(
<div>
    <Container>
        <br />
        <h1 className='text-white text-center' id='superhero'>SUPERHERO MOVIES</h1>
        <br />
        <Row>
            <Col md={4} className='movie-wrapper'>
                <Card className="movie-image">
                    <Image src={antman} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Antman Movies</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional.
                    </Card.Text>
            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className='movie-wrapper'>
                <Card className="movie-image">
                    <Image src={avenger} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Avenger Movies</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional.
                    </Card.Text>
            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className='movie-wrapper'>
                <Card className="movie-image">
                    <Image src={batman} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Batman Movies</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional.
                    </Card.Text>
            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className='movie-wrapper'>
                <Card className="movie-image">
                    <Image src={robinhood} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Robinhood Movies</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional.
                    </Card.Text>
            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className='movie-wrapper'>
                <Card className="movie-image">
                    <Image src={spiderman} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Spiderman Movies</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional.
                    </Card.Text>
            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className='movie-wrapper'>
                <Card className="movie-image">
                    <Image src={superman} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Superman Movies</Card.Title>
                    <Card.Text className='text-left'>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional.
                    </Card.Text>
            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>  
</div>
    )
}

export default Superhero