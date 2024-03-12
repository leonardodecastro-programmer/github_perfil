import { useState } from "react"

import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input className="searchInput" type="text" placeholder="Insira seu Github" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
