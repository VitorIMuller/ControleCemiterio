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
                        id="outlined-basic"
                        label="Id Sepultura"
                        variant="outlined"
                        required
                        onChange={(e) => setFormData({ ...formData, idSepultura: e.target.value })} />

                    <TextField
                        id="outlined-basic"
                        label="Nome do responsável"
                        variant="outlined"
                        required
                        onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })} />
                    <TextField
                        id="outlined-basic"
                        label="Endereço"
                        variant="outlined"
                        required
                        onChange={(e) => setFormData({ ...formData, endereco: e.target.value })} />
                    <TextField
                        id="outlined-basic"
                        label="Nº"
                        variant="outlined"
                        onChange={(e) => setFormData({ ...formData, numero: e.target.value })} />
                    <TextField
                        id="outlined-basic"
                        label="Bairro"
                        variant="outlined"
                        required
                        onChange={(e) => setFormData({ ...formData, bairro: e.target.value })} />
                    <TextField
                        id="outlined-basic"
                        label="Cidade"
                        variant="outlined"
                        required
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })} />
                    <TextField
                        id="outlined-basic"
                        label="Telefone"
                        variant="outlined"
                        required
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Celular"
                        variant="outlined"
                        required
                        onChange={(e) => setFormData({ ...formData, celular: e.target.value })} />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <TextField
                        id="outlined-basic"
                        label="CPF"
                        variant="outlined"
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


