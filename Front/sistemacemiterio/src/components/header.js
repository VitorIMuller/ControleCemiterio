import styled from "styled-components"
import { IoLogOutOutline } from "react-icons/io5";
import Logo from "../components/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Container>
            <Itens>
                <NavigateImage to="/">
                    <img src={Logo} alt="logo" />
                </NavigateImage>
                <Title>Cemitério Santo Inácio</Title>
                <Marginner>
                    <IoLogOutOutline />
                </Marginner>
            </Itens>

        </Container>
    )
}
const Container = styled.div`
background-color: lightblue;
`;
const Marginner = styled.div`
    margin: 10px;
    cursor: pointer;
`
const NavigateImage = styled(Link)`
    all: unset;
    margin: 10px;
    cursor: pointer;

`

const Title = styled.div`
    background-color: lightblue;
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    font-weight: bold;
`;
const Itens = styled.div`
    width: 100%;
    height: 7vh;

    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lightblue;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: fixed;
    
    img{
        height: 60px;
        width: 60px;
        margin: 10px;
    }
`