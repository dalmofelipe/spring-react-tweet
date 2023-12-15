import { FormEvent, useState } from "react";
import "./styles.css";


const Mensagem = () => {
  const [autor, setAutor] = useState("")
  const [mensagem, setMensagem] = useState("")
  
  const savePost = (event:FormEvent) => {
    event?.preventDefault()
    console.log(`salvando usuario ${autor} e mensagem ${mensagem}`)
  }

  return (
    <>
      <div className="mensagem">
        <div className="mensagem-container container">

          <h3 style={{"marginBottom" : "20px", "color": "777"}} >
            Fala, gordola?
          </h3>

          <form onSubmit={savePost}>

            <label htmlFor="autor">
              <input type="text" name="autor" 
                value={autor} onChange={e => setAutor(e.target.value)}
                placeholder="Me diga seu nome?" />
            </label>

            <label htmlFor="mensagem">
              <textarea name="mensagem" id="mensagem" cols={100} rows={5} 
                value={mensagem} onChange={e => setMensagem(e.target.value)}
                placeholder="Escreva uma mensagem legal..."></textarea>
            </label>
            
            <button type="submit" >Enviar</button>

          </form>

        </div>
      </div>
    </>
  );
};

export default Mensagem;
