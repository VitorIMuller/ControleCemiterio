import {
    BackHome,
    Title,
    Container,
    ContainerInputs,
    CenterLoader,
    Subtitle,
    Describe,
    ContainerMenu
} from "./style.js"
import Header from "../../components/header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import * as api from "./../../Services/api"
import Loader from "../../components/loading";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


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
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function getTumulos(respSearch) {

        api.getTumulo(respSearch).then((response) => {
            setUserData(response.data)
        })
    }

    function getTumuloByName(name) {
        const data = usersData.find(el => el.nomeResponsavel === name)
        setTumulo(data)
        setSepultados(data.sepultado)
        setFormData({
            idSepultura: data.idSepultura,
            nomeResponsavel: data.nomeResponsavel,
            endereco: data.endereco,
            numero: data.numero,
            bairro: data.bairro,
            cidade: data.cidade,
            telefone: data.telefone,
            celular: data.celular,
            email: data.email,
            cpf: data.cpf
        })
    }

    function atualizarTumulo(formData) {
        console.log(formData)
        setLoading(true)
        api.atualizarTumulo(formData).then(() => {
            setLoading(false)
            alert("Tumulo Atualizado!")
            navigate("/")
        }).catch((error) => {
            alert(error.response.data)
        })
    }

    function deleteFunction(id) {

        console.log(id)
        api.deletarSepultado(id).then(() => {
            alert("Deletado Com Sucesso!")
            window.location.reload()
        }).catch((error) => {
            alert(error.response.data)
        })
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
                    <Autocomplete
                        disablePortal
                        freeSolo
                        autoComplete={true}
                        id="combo-box-demo"
                        options={usersData.map((el) => el.nomeResponsavel)}
                        onInputChange={(e, value) => { setRespSearch(value) }}
                        renderInput={(params) => <TextField {...params} label="Nome do Responsável" />}
                    />
                    <Button variant="contained" size="large" onClick={() => getTumuloByName(respSearch)}>Consultar</Button>
                    {tumulo &&
                        <>
                            <Subtitle>Id Sepultura</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.idSepultura}
                                disabled
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, idSepultura: e.target.value })} />
                            <Subtitle>Nome Responsavel</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.nomeResponsavel}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })} />
                            <Subtitle>Endereço</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.endereco}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, endereco: e.target.value })} />
                            <Subtitle>Numero</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.numero}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, numero: e.target.value })} />
                            <Subtitle>Bairro</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.bairro}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, bairro: e.target.value })} />
                            <Subtitle>Cidade</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.cidade}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, cidade: e.target.value })} />
                            <Subtitle>Telefone</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.telefone}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} />
                            <Subtitle>Celular</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.celular}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, celular: e.target.value })} />
                            <Subtitle>Email</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.email}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <Subtitle>Cpf</Subtitle>
                            <TextField id="outlined-basic"
                                label={tumulo.cpf}
                                variant="outlined"
                                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })} />
                            {loading ?
                                <CenterLoader><Loader /></CenterLoader>
                                :
                                <Button variant="contained" size="large" onClick={() => atualizarTumulo(formData)}>Atualizar</Button>
                            }
                            <Describe>SEPULTADOS</Describe>
                            {sepultados ?
                                sepultados.map((sepultado) =>
                                    <>
                                        <ContainerMenu>

                                            <Describe>SEPULTADO COLOCAR UM REMOVER SEPULTADO</Describe>
                                            <IconButton aria-label="delete" size="large">
                                                <DeleteIcon onClick={() => deleteFunction(sepultado.id)} fontSize="inherit" />
                                            </IconButton>
                                        </ContainerMenu>
                                        <Subtitle>Nome</Subtitle>
                                        <TextField id="outlined-basic" label={sepultado.nomeSepultado} variant="outlined" />
                                        <Subtitle>Data De Nascimento</Subtitle>
                                        <TextField id="outlined-basic" label={sepultado.dataNascimento} variant="outlined" />
                                        <Subtitle>Data De Falecimento</Subtitle>
                                        <TextField id="outlined-basic" label={sepultado.dataFalescimento} variant="outlined" />
                                    </>
                                )
                                :
                                <Subtitle>NÃO HÁ SEPULTADOS</Subtitle>
                            }

                        </>
                    }
                </ContainerInputs>
            </Container>
        </>
    )
}


