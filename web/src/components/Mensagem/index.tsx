import { FormEvent, useContext, useState } from "react";
import MessagesContext from "../../context/MessagesContext";
import TweetService from "../../http/TweetService";
import "./styles.css";


const Mensagem = () => {

  const initial_state = {
    autor: '',
    mensagem: ''
  }
  const clearState = () => setTweet(initial_state)
  const [ tweet, setTweet ] = useState(initial_state)
  const { tweets, setTweets } = useContext(MessagesContext);

  const saveTweet = async (event:FormEvent) => {
    event?.preventDefault()
    console.log(`salvando usuario ${tweet.autor} e mensagem ${tweet.mensagem}`)
    await TweetService.save({ ...tweet })
    setTweets([tweet, ...tweets])
    clearState()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> |
     React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTweet({...tweet, [name]: value})
  };


  return (
    <>
      <div className="mensagem">
        <div className="mensagem-container container">

          <h3 style={{"marginBottom" : "20px", "color": "777"}} >
            Tweetando!
          </h3>

          <form onSubmit={saveTweet}>

            <label htmlFor="autor">
              <input type="text" name="autor" 
                value={tweet.autor}
                onChange={ handleChange }
                placeholder="Me diga seu nome?" />
            </label>

            <label htmlFor="mensagem">
              <textarea name="mensagem" id="mensagem" cols={100} rows={5} 
                onChange={ handleChange }
                value={tweet.mensagem}
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
