import styled from "styled-components"


export default function Header() {
    return (
        <Title>Cemitério Santo Inácio</Title>
    )
}

const Title = styled.div`
    width: 100%;
    height: 7vh;
    background-color: lightblue;

    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lato', sans-serif;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    position: fixed;

`