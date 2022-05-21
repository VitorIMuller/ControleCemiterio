import axios from "axios"

const BASE_URL = "http://localhost:5000"


async function createSepultura(formData) {

    const promise = await axios.post(`${BASE_URL}/cadastro`, formData)
    return promise;
}

async function addSepultado(formData) {
    const promise = await axios.post(`${BASE_URL}/cadastroSepultado`, formData)
    return promise;
}


export {
    createSepultura,
    addSepultado
}