import React, {Component} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import image1 from '../images/front1.jpg';
import image2 from '../images/front2.jpg';
import image3 from '../images/front3.jpg';

const items = [
  {
    src: image1,
    altText: 'A five star Hotel',
    caption: 'We like to keep it that way!'
  },
  {
    src: image2,
    altText: 'Book early, save more',
    caption: 'Room Availability checker and booking!'
  },
  {
    src: image3,
    altText: 'Rooms, restaurants, spa and much more !',
    caption: 'Take advantage of our seasonal specials'
  }
];


class CarouselElement extends Component {
  state = {activeIndex: 0};

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  };

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({activeIndex: newIndex});
  };

  render() {
    const {activeIndex} = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="w-100" height={600}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
      </Carousel>
    );
  }
}

export default CarouselElement;
