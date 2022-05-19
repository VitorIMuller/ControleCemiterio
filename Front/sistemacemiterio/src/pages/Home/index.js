import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import backgroundImage from "../../components/SANTO INACIO2.jpg"

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <Cadastro to="/cadastro">Cadastro Sepultura</Cadastro>
                <Cadastro to="/cadastroSepultado">Cadastro Sepultado</Cadastro>
                <Cadastro to="/pagamentos">Pagamentos</Cadastro>
                <Cadastro to="/consulta">Consulta</Cadastro>
            </Container>
        </>
    )
}



const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    padding-top: 10vh;

    font-family: 'Lato', sans-serif;

    background-color: grey;
    background-image: url("${backgroundImage}");
    background-position: center;
    background-repeat: no-repeat;
    
`
const Cadastro = styled(Link)`
    all: unset;
    width: 100%;
    height: 60px;

    border-radius: 10px;

    display: flex;

    align-items: center;
    justify-content: center;

    background-color: lightblue;
    font-weight: 700;


`