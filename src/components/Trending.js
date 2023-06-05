import { Container, Row, Col, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import duneImage from '../assets/images/trending/dune.jpg'
import everything from '../assets/images/trending/everything.jpg'
import infinite from '../assets/images/trending/infinite.jpg'
import joker from '../assets/images/trending/joker.jpg'
import lightyear from '../assets/images/trending/lightyear.jpg'
import morbius from '../assets/images/trending/morbius.jpg'


const Trending = () => {
    return(
<div>
    <Container>
        <br />
        <h1 className='text-white text-center' id='trending'>TRENDING MOVIES</h1>
        <br />
        <Row>
            <Col md={4} className='movie-wrapper'>
                <Card className="movie-image">
                    <Image src={duneImage} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Dune Movies</Card.Title>
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
                    <Image src={everything} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Everything Movies</Card.Title>
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
                    <Image src={infinite} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Infinite Movies</Card.Title>
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
                    <Image src={joker} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>joker Movies</Card.Title>
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
                    <Image src={lightyear} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Lightyear Movies</Card.Title>
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
                    <Image src={morbius} alt="dune movies" className='images'/>
                    <div className='bg-dark'>
                        <div className='p-2 m-2 text-white'>
                    <Card.Title className='text-center'>Morbius Movies</Card.Title>
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

export default Trending