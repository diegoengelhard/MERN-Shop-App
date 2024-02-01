import React from 'react';

// Import styles
import {
    Container,
    Wrapper,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
    Button
} from './SingleProduct.styles';

// Import MUI icons
import { Add, Remove } from "@material-ui/icons";

const SingleProduct = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <ImgContainer>
                        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Denim Jumpsuit</Title>
                        <Desc>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                            tristique tortor pretium ut. Curabitur elit justo, consequat id
                            condimentum ac, volutpat ornare.
                        </Desc>
                        <Price>$ 20</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                <FilterColor color="black" />
                                <FilterColor color="darkblue" />
                                <FilterColor color="gray" />
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove />
                                <Amount>1</Amount>
                                <Add />
                            </AmountContainer>
                            <Button>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default SingleProduct