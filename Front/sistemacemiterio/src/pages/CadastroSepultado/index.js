import {
    BackHome,
    Title,
    Container,
    ContainerInputs,
    CenterLoader
} from "./style.js"
import Header from "../../components/header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import Loader from "../../components/loading";
import Swal from "sweetalert2";
import * as api from "../../Services/api"

export default function CadastroSepultado() {

    const [formData, setFormData] = useState({
        idSepultura: '',
        nomeSepultado: '',
        dataNascimento: '',
        dataFalescimento: ''
    })
    const [isLoading, setIsLoading] = useState(false);

    function handleRegister(e) {
        e.preventDefault();
        if (formData.idSepultura && formData.nomeSepultado && formData.dataFalescimento && formData.dataNascimento) {
            setIsLoading(true)
            api.addSepultado(formData).then(() => {
                setIsLoading(false)
                Swal.fire(
                    'Cadastrado!',
                    'Cadastro criado com sucesso!',
                    'success')

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
                <Title>Cadastro Sepultado</Title>
                <ContainerInputs>
                    <TextField id="outlined-basic" label="Id Sepultura" required variant="outlined" onChange={(e) => setFormData({ ...formData, idSepultura: e.target.value })} />
                    <TextField id="outlined-basic" label="Nome do Sepultado" required variant="outlined" onChange={(e) => setFormData({ ...formData, nomeSepultado: e.target.value })} />
                    <TextField id="outlined-basic" label="Data de Nascimento" required variant="outlined" onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })} />
                    <TextField id="outlined-basic" label="Data de Falescimento" required variant="outlined" onChange={(e) => setFormData({ ...formData, dataFalescimento: e.target.value })} />
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


