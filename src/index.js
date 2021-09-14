// Se declara el arreglo
const messages = [
    "David 1",
    "Diana 2",
    "Ana Maria 3",
    "Isabela 4",
    "Antonio 5",
    "Norma 6"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

// Exportar como un módulo

module.exports = { randomMsg }