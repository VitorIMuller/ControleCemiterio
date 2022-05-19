// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CadastroSepultado() {
    return (
        <>
            <Header />
            <Container>
                <BackHome to="/"><Button variant="contained" size="large">Voltar Ao Inicio</Button></BackHome>
                <Title>Cadastro</Title>
                <ContainerInputs>
                    <TextField id="outlined-basic" label="Id Sepultura" variant="outlined" />
                    <TextField id="outlined-basic" label="Nome do Sepultado" variant="outlined" />
                    <TextField id="outlined-basic" label="Data de Nascimento" variant="outlined" />
                    <TextField id="outlined-basic" label="Data de Falescimento" variant="outlined" />
                    <Button variant="contained" size="large">Cadastrar</Button>
                </ContainerInputs>
            </Container>
        </>
    )
}


const Title = styled.div`
    font-family: 'Lato', sans-serif;    
    font-size: 40px;
    font-weight: 700;
`

const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px;

    width: 50%;


`
const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    padding-top: 10vh;

    font-family: 'Lato', sans-serif;

    background-color: white;
    
    
`
const BackHome = styled(Link)`

    all:unset;
    width: 190px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    

    border-radius: 10px;

    font-family: 'Lato', sans-serif;
    font-weight: 700;



`