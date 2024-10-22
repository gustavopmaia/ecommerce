import Carousel from 'react-bootstrap/Carousel'
import * as S from './styles'

export const Carrossel = () => {
  return (
    <S.CarouselContainer>
      <Carousel.Item interval={1000}>
        <img src='https://placehold.co/1920x1080' width={'100%'} height={'70%'} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='https://placehold.co/1920x1080' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://placehold.co/1920x1080' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </S.CarouselContainer>
  )
}
