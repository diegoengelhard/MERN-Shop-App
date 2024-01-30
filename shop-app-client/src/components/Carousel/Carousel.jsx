import React, { useState } from 'react';

// Import styles
import {
    Container,
    Arrow,
    Wrapper,
    Slide,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Button
} from './Carousel.styles';

// Import MUI icons
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

// Import temp carousel data
import { sliderItems } from './data';

const Carousel = () => {
    // Set carousel index state
    const [slideIndex, setSlideIndex] = useState(0);

    // Handle click on arrow
    const handleClick = (direction) => {
        // If direction is left, decrease index by 1, else increase by 1
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
    return (
        <>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item) => (
                        <Slide bg={item.bg} key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOW NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </>
    )
}

export default Carousel