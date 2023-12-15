import "./styles.css";


const Mensagem = () => {
  
  return (
    <>
      <div className="mensagem">
        <div className="mensagem-container container">

          <h3 style={{"marginBottom" : "20px", "color": "777"}} >
            Eai, como vai?
          </h3>

          <form>

            <label htmlFor="autor">
              <input type="text" name="autor" placeholder="Me diga seu nome?" />
            </label>

            <label htmlFor="mensagem">
              <textarea name="mensaem" id="mensagem" cols={100} 
                rows={5} placeholder="Escreva uma mensagem legal..."></textarea>
            </label>
            
            <button type="submit">Enviar</button>

          </form>

        </div>
      </div>
    </>
  );
};

export default Mensagem;
