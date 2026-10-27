import { useState } from 'react'
import './style.css'

function AdicionarUsuario() {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [usuarios, setUsuarios] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const novoUsuario = {nome, email}
        setUsuarios([...usuarios, novoUsuario])
        setNome('')
        setEmail('')
    }

    return(

        <div>
            <h1>Adicionar Usuário</h1>
            <form>
                <label htmlFor="nome">Nome:</label>
                <input 
                type="text" 
                id="nome"
                name="nome"
                required
                />

                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email"
                name="email"
                required
                />

                <button type="submit">Adicionar</button>
                </form>

                <hr />
                
                <h2></h2>


}
export default AdcionarUsuario
)
      
