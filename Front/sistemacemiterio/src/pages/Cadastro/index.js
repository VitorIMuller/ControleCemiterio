// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import * as api from "../../Services/api"


export default function Cadastro() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        idSepultura: "",
        nomeResponsavel: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        telefone: "",
        celular: "",
        email: "",
        cpf: ""
    })


    function handleRegister(e) {
        e.preventDefault();

        if (formData.idSepultura && formData.nomeResponsavel && formData.endereco && formData.bairro && formData.cidade) {

            api.createSepultura(formData).then(() => {

                alert("Criado Com Sucesso!")
                navigate("/")
            }
            ).catch((error) => {
                alert(error.message)
            });


        } else {
            alert("favor preencher os campos obrigatórios!")
        }

    }

    return (
        <>
            <Header />
            <Container>
                <BackHome to="/"><Button variant="contained" size="large">Voltar Ao Inicio</Button></BackHome>
                <Title>Cadastro</Title>
                <ContainerInputs >
                    <TextField id="outlined-basic" label="Id Sepultura" variant="outlined" required onChange={(e) => setFormData({ ...formData, idSepultura: e.target.value })} />
                    <TextField id="outlined-basic" label="Nome do responsável" variant="outlined" required onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })} />
                    <TextField id="outlined-basic" label="Endereço" variant="outlined" required onChange={(e) => setFormData({ ...formData, endereco: e.target.value })} />
                    <TextField id="outlined-basic" label="Nº" variant="outlined" onChange={(e) => setFormData({ ...formData, numero: e.target.value })} />
                    <TextField id="outlined-basic" label="Bairro" variant="outlined" required onChange={(e) => setFormData({ ...formData, bairro: e.target.value })} />
                    <TextField id="outlined-basic" label="Cidade" variant="outlined" required onChange={(e) => setFormData({ ...formData, cidade: e.target.value })} />
                    <TextField id="outlined-basic" label="Telefone" variant="outlined" onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} />
                    <TextField id="outlined-basic" label="Celular" variant="outlined" onChange={(e) => setFormData({ ...formData, celular: e.target.value })} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <TextField id="outlined-basic" label="CPF" variant="outlined" onChange={(e) => setFormData({ ...formData, cpf: e.target.value })} />
                    <Button variant="contained" size="large" onClick={handleRegister}>Cadastrar</Button>
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
// const Cadastro = styled(Link)`
//     all: unset;
//     width: 100%;
//     height: 60px;

//     border-radius: 10px;

//     display: flex;

//     align-items: center;
//     justify-content: center;

//     background-color: lightblue;
//     font-weight: 700;


// `