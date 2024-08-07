import { useState } from "react";
import "./styles.css"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("")
  const [isPassword, setIsPassword] = useState(false)
  


  function generate() {
    // Define o conjunto de caracteres que podem ser usados na senha
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const lenght = 12 // Define o comprimento da senha
    let newPassword = ""

  for (let i = 0; i < lenght; i++) {
    const position = Math.floor(Math.random() * characters.length)
    newPassword += characters[position]
  }

  setPassword(newPassword)
  setCopyText("Copiar")
  setIsPassword(true)
  
  console.log(copyText)
}

function copyToClipboard() {
  window.navigator.clipboard.writeText(password)
  console.log(copyText)
  setCopyText("Copiado!")
  setIsPassword(false)
  setPassword('')

  
}

return (
  <div class="menu">
    <h1>Gerador de senhas</h1>
    <p>Crie aqui sua senha segura!</p>
    <button class="glow-on-hover" onClick={generate}>Gerar!</button>
   {isPassword ?  <button class="glow-on-hover" onClick={copyToClipboard}>{copyText}</button> : ''}
    {/* Exibe a senha gerada */}
   <div class="Senha">{password}</div>
   {copyText === "Copiado!" ? <p>Senha copiada com sucesso!</p> : ''}
  </div>
)

}




export default App;
