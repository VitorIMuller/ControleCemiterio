import styled from "styled-components"
import { Link } from "react-router-dom"

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
    display: flex;
    justify-content: space-between;

`

export {
    BackHome,
    Title,
    Container,
    ContainerInputs,
    CenterLoader,
    Subtitle,
    Describe,
    ContainerMenu
}
