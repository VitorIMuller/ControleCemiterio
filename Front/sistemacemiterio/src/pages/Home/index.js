import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import backgroundImage from "../../components/SANTO INACIO2.jpg"

export default function Home() {
    return (
        <>
            <Header />
            <Mega>
                <CadastroPagamentos to="/pagamentos">Pagamentos</CadastroPagamentos>
                <ContainerBig>
                    <Container>
                        <Cadastro to="/cadastro">Cadastro Sepultura</Cadastro>
                        <Cadastro to="/cadastroSepultado">Cadastro Sepultado</Cadastro>
                    </Container>
                    <Container>
                        <Cadastro to="/consulta">Consulta</Cadastro>
                        <Cadastro to="/relatorios">Relatorios</Cadastro>
                    </Container>
                </ContainerBig>
            </Mega>
        </>
    )
}



const Mega = styled.div`
    height: 100vh;
    font-family: 'Lato', sans-serif;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
    background-image: url("${backgroundImage}");
    background-position: center;
    background-repeat: no-repeat;
`;
const Container = styled.div`
    width: 35vh;
    
    
    font-family: 'Lato', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    
`;

const ContainerBig = styled.div`
        width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
`;

const Cadastro = styled(Link)`
    all: unset;
    width: 300px;
    height: 150px;

    border-radius: 10px;
    border: black 8px;

    display: flex;

    align-items: center;
    justify-content: center;
    

    background-color: lightblue;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 20px 20px rgba(0,0,0,.15);
    transition: all .4s ease;

    &:hover{
        border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
        box-shadow: 10px 10px rgba(0,0,0,.25);
    }

`;

const CadastroPagamentos = styled(Link)`
    all: unset;
    width: 655px;
    height: 150px;

    border-radius: 10px;
    border: black 8px;

    display: flex;

    align-items: center;
    justify-content: center;

    background-color: lightblue;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 20px 20px rgba(0,0,0,.15);
    transition: all .4s ease;

    margin-bottom: 30px;


    &:hover{
        border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
        box-shadow: 10px 10px rgba(0,0,0,.25);
    }

`;