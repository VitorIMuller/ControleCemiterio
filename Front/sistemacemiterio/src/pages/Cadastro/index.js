import Header from "../../components/header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { forwardRef, useState } from "react";
import * as api from "../../Services/api"
import { useNavigate } from "react-router-dom";
import {
    BackHome,
    Title,
    Container,
    ContainerInputs,
    CenterLoader
} from "./style.js"
import Loader from "../../components/loading";
import Swal from "sweetalert2";
import styled from "styled-components";


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
    });
    const [isLoading, setIsLoading] = useState(false);



    function handleRegister(e) {
        e.preventDefault();
        if (formData.idSepultura && formData.nomeResponsavel && formData.endereco && formData.bairro && formData.cidade) {
            setIsLoading(true)
            api.createSepultura(formData).then(() => {
                setIsLoading(false)
                Swal.fire(
                    'Criado!',
                    'Cadastro Criado Com Sucesso!',
                    'success'
                )
                navigate("/")



            }).catch((error) => {
                setIsLoading(false)
                console.log(error)
                Swal.fire(
                    `${error.response.data}`,
                    '',
                    'warning'
                )

            });
        } else {
            Swal.fire(
                'Favor preencher os campos obrigatórios!',
                '',
                'warning'
            )
        }
    }

    return (
        <>
            <Header />
            <Container>
                <BackHome to="/"><Button variant="contained" size="large">Voltar Ao Inicio</Button></BackHome>
                <Title>Cadastro</Title>
                <ContainerInputs >
                    <TextField
                        sx={{
                            '& > :not(style)': { width: '10ch' },
                        }}
                        id="outlined-basic"
                        label="Id"
                        variant="outlined"
                        required
                        size="small"
                        onChange={(e) => setFormData({ ...formData, idSepultura: e.target.value })} />

                    <TextField
                        id="outlined-basic"
                        label="Nome do responsável"
                        variant="outlined"
                        required
                        size="small"
                        onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })} />
                    <DoubleInput>

                        <TextField
                            id="outlined-basic"
                            label="Endereço"
                            variant="outlined"
                            required
                            size="small"
                            sx={{
                                '& > :not(style)': { width: '97ch' },
                            }}
                            onChange={(e) => setFormData({ ...formData, endereco: e.target.value })} />
                        <TextField
                            size="small"
                            id="outlined-basic"
                            label="Nº"
                            variant="outlined"
                            sx={{
                                '& > :not(style)': { width: '10ch' },
                            }}
                            onChange={(e) => setFormData({ ...formData, numero: e.target.value })} />
                    </DoubleInput>
                    <DoubleInput>
                        <TextField
                            id="outlined-basic"
                            label="Bairro"
                            variant="outlined"
                            required
                            size="small"
                            sx={{
                                '& > :not(style)': { width: '50ch' },
                            }}
                            onChange={(e) => setFormData({ ...formData, bairro: e.target.value })} />
                        <TextField
                            id="outlined-basic"
                            label="Cidade"
                            variant="outlined"
                            required
                            size="small"
                            sx={{
                                '& > :not(style)': { width: '50ch' },
                            }}
                            onChange={(e) => setFormData({ ...formData, cidade: e.target.value })} />
                    </DoubleInput>
                    <DoubleInput>
                        <TextField
                            id="outlined-basic"
                            label="Telefone"
                            variant="outlined"
                            required
                            size="small"
                            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Celular"
                            variant="outlined"
                            required
                            size="small"
                            onChange={(e) => setFormData({ ...formData, celular: e.target.value })} />
                    </DoubleInput>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <TextField
                        id="outlined-basic"
                        label="CPF"
                        variant="outlined"
                        size="small"
                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })} />
                    {isLoading ?
                        <CenterLoader><Loader /></CenterLoader>
                        :
                        <Button variant="contained" size="large" onClick={handleRegister}>Cadastrar</Button>
                    }
                </ContainerInputs>
            </Container>



        </>
    )


}

const DoubleInput = styled.div`
    display: flex;
    gap: 15px
`;


