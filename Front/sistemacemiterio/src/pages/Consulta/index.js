// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import * as api from "./../../Services/api"

export default function Consulta() {

    const [usersData, setUserData] = useState([])
    const [respSearch, setRespSearch] = useState('');
    const [tumulo, setTumulo] = useState()
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
    });
    const [sepultados, setSepultados] = useState()

    function getTumulos(respSearch) {

        api.getTumulo(respSearch).then((response) => {
            setUserData(response.data)
        })
    }

    function getTumuloByName(name) {
        const data = usersData.find(el => el.nomeResponsavel === name)
        setTumulo(data)
        setSepultados(data.sepultado)
    }


    useEffect(() => {
        getTumulos()
    }, [setRespSearch])

    return (
        <>
            <Header />
            <Container>
                <BackHome to="/"><Button variant="contained" size="large">Voltar Ao Inicio</Button></BackHome>
                <Title>Consulta</Title>
                <ContainerInputs>
                    <TextField id="outlined-basic" label="Nome do responsável" variant="outlined" />
                    <Autocomplete
                        disablePortal
                        freeSolo
                        autoComplete={true}
                        id="combo-box-demo"
                        options={usersData.map((el) => el.nomeResponsavel)}
                        // sx={}
                        onInputChange={(e, value) => { setRespSearch(value) }}
                        renderInput={(params) => <TextField {...params} label="Nome do Responsável" />}
                    />
                    <Button variant="contained" size="large" onClick={() => getTumuloByName(respSearch)}>Consultar</Button>
                    {tumulo &&
                        <>
                            <p>Id Sepultura</p>
                            <TextField id="outlined-basic" label={tumulo.idSepultura} disabled variant="outlined" onChange={(e) => setFormData({ ...formData, idSepultura: e.target.value })} />
                            <p>Nome Responsavel</p>
                            <TextField id="outlined-basic" label={tumulo.nomeResponsavel} variant="outlined" onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })} />
                            <p>Endereço</p>
                            <TextField id="outlined-basic" label={tumulo.endereco} variant="outlined" onChange={(e) => setFormData({ ...formData, endereco: e.target.value })} />
                            <p>Numero</p>
                            <TextField id="outlined-basic" label={tumulo.numero} variant="outlined" onChange={(e) => setFormData({ ...formData, numero: e.target.value })} />
                            <p>Bairro</p>
                            <TextField id="outlined-basic" label={tumulo.bairro} variant="outlined" onChange={(e) => setFormData({ ...formData, bairro: e.target.value })} />
                            <p>Cidade</p>
                            <TextField id="outlined-basic" label={tumulo.cidade} variant="outlined" onChange={(e) => setFormData({ ...formData, cidade: e.target.value })} />
                            <p>Telefone</p>
                            <TextField id="outlined-basic" label={tumulo.telefone} variant="outlined" onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} />
                            <p>Celular</p>
                            <TextField id="outlined-basic" label={tumulo.celular} variant="outlined" onChange={(e) => setFormData({ ...formData, celular: e.target.value })} />
                            <p>Email</p>
                            <TextField id="outlined-basic" label={tumulo.email} variant="outlined" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <p>Cpf</p>
                            <TextField id="outlined-basic" label={tumulo.cpf} variant="outlined" onChange={(e) => setFormData({ ...formData, cpf: e.target.value })} />
                            <Button variant="contained" size="large" onClick={() => getTumuloByName(respSearch)}>Atualizar</Button>
                            <h1>SEPULTADOS</h1>
                            {sepultados ?
                                sepultados.map((sepultado) =>
                                    <>
                                        <h2>SEPULTADO COLOCAR UM REMOVER SEPULTADO</h2>
                                        <p>Nome</p>
                                        <TextField id="outlined-basic" label={sepultado.nomeSepultado} variant="outlined" />
                                        <p>Data De Nascimento</p>
                                        <TextField id="outlined-basic" label={sepultado.dataNascimento} variant="outlined" />
                                        <p>Data De Falecimento</p>
                                        <TextField id="outlined-basic" label={sepultado.dataFalescimento} variant="outlined" />
                                    </>
                                )
                                :
                                "NÃO HÁ SEPULTADOS"
                            }

                        </>
                    }
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