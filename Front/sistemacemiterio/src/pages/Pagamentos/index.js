import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import * as api from "./../../Services/api"
import { Autocomplete } from "@mui/material";
import Loader from "../../components/loading";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';


export default function Pagamentos() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [usersData, setUserData] = useState([])
    const [respSearch, setRespSearch] = useState('');
    const [tumulo, setTumulo] = useState()
    const [value, setValue] = useState({
        Y2023: '',
        Y2024: '',
        Y2025: '',
        Y2026: ''
    })


    function getTumulos(respSearch) {

        api.getTumulo(respSearch).then((response) => {
            setUserData(response.data)
        })
    }
    function getTumuloByName(name) {
        const data = usersData.find(el => el.nomeResponsavel === name)
        setTumulo(data)
    }
    const handleChange = (prop) => (event) => {
        setValue({ ...value, [prop]: event.target.value });
    };

    useEffect(() => {
        getTumulos()
    }, [setRespSearch])
    return (
        <>
            <Header />
            <Container>
                <BackHome to="/"><Button variant="contained" size="large">Voltar Ao Inicio</Button></BackHome>
                <Title>Pagamentos</Title>
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
                    {loading ?
                        <CenterLoader><Loader /></CenterLoader>
                        :
                        <Button variant="contained" size="large" onClick={() => getTumuloByName(respSearch)}>Buscar</Button>
                    }
                </ContainerInputs>
                {tumulo &&
                    <>
                        <ContainerMenu>
                            <Subtitle>ID SEPULTURA</Subtitle>
                            <Subtitle>NOME DO RESPONSÁVEL</Subtitle>
                        </ContainerMenu>
                        <ContainerItens>
                            <Describe>{tumulo.idSepultura}</Describe>
                            <Describe>{tumulo.nomeResponsavel}</Describe>
                        </ContainerItens>
                        <ContainerAnos>
                            <Ano>
                                <div>2023</div>
                                <div>Anuidade paga no valor de R$98,00</div>
                                {/* <FormControl sx={{ m: 1 }} size="small">
                                    <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                                    <OutlinedInput
                                        id="2022"
                                        // value={value.Y2023}
                                        // onChange={handleChange('Y2023')}
                                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                        label="Valor"
                                        size="small"
                                    />
                                </FormControl>
                                <Button variant="contained" color="success">
                                    Pagar
                                </Button> */}
                            </Ano>
                            <Ano>
                                <div>2024</div>
                                <FormControl sx={{ m: 1 }} size="small">
                                    <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                                    <OutlinedInput
                                        id="2022"
                                        value={value.Y2024}
                                        onChange={handleChange('Y2024')}
                                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                        label="Valor"
                                        size="small"
                                    />
                                </FormControl>
                                <Button variant="contained" color="success">
                                    Pagar
                                </Button>
                            </Ano>
                            <Ano>
                                <div>2025</div>
                                <FormControl sx={{ m: 1 }} size="small">
                                    <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                                    <OutlinedInput
                                        id="2022"
                                        value={value.Y2025}
                                        onChange={handleChange('Y2025')}
                                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                        label="Valor"
                                        size="small"
                                    />
                                </FormControl>
                                <Button variant="contained" color="success">
                                    Pagar
                                </Button>
                            </Ano>
                            <Ano>
                                <div>2026</div>
                                <FormControl sx={{ m: 1 }} size="small">
                                    <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                                    <OutlinedInput
                                        id="2022"
                                        value={value.Y2026}
                                        onChange={handleChange('Y2026')}
                                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                        label="Valor"
                                        size="small"
                                    />
                                </FormControl>
                                <Button variant="contained" color="success">
                                    Pagar
                                </Button>
                            </Ano>
                        </ContainerAnos>
                    </>

                }
            </Container>
        </>
    )
}


const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px;

    width: 50%;


`

const CenterLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

const Subtitle = styled.p`
    font-family: 'Lato', sans-serif;
    font-weight: 700;


`

const Describe = styled.p`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 18px;

    margin-top: 15px;

`

const ContainerMenu = styled.div`
width: 50%;
    display: flex;
    justify-content: flex-start;

    gap:10px;
`
const ContainerItens = styled.div`
width: 50%;
    display: flex;
    justify-content: flex-start;

    gap:120px;
`
const ContainerAnos = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    gap: 10px;

`

const Ano = styled.div`
width:100%;
    display: flex;
    justify-content: space-between;

    .div{
        font-family: 'Lato', sans-serif;    
    font-size: 18px;
    font-weight: 500;
    }

    align-items: center;

`

const Title = styled.div`
    font-family: 'Lato', sans-serif;    
    font-size: 40px;
    font-weight: 700;
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