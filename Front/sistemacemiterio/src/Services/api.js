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

async function getTumulo(formData) {
    const promise = await axios.get(`${BASE_URL}/consultaCadastro`, formData)
    return promise;
}

async function atualizarTumulo(formData) {
    const promise = await axios.patch(`${BASE_URL}/atualizaCadastro`, formData)
    return promise;
}


async function deletarSepultado(id) {
    const promise = await axios.delete(`${BASE_URL}/deletarSepultado/${id}`, id)
    return promise;
}




export {
    createSepultura,
    addSepultado,
    getTumulo,
    atualizarTumulo,
    deletarSepultado
}