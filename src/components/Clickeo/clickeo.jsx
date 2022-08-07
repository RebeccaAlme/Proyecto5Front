import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const clickeo = () => {
    return (
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/10/30/18/52/halloween-candy-1014629_960_720.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/10/30/18/52/halloween-candy-1014629_960_720.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2015/10/30/18/52/halloween-candy-1014629_960_720.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default clickeo