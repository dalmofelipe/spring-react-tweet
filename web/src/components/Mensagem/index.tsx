import { FormEvent, useState } from "react";
import TweetService from "../../http/TweetService";
// import MessagesContext from "../../context/MessagesContext"; ESTADO GLOBAL CONTEXT
import "./styles.css";


const Mensagem = () => {
  const initial_state = {
    autor: '',
    mensagem: ''
  }
  // const { posts, setPosts } = useContext(MessagesContext);
  const [post, setPost] = useState(initial_state)
  const clearState = () => setPost(initial_state)
  const savePost = async (event:FormEvent) => {
    event?.preventDefault()
    console.log(`salvando usuario ${post.autor} e mensagem ${post.mensagem}`)
    await TweetService.save({ ...post })
    clearState()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> |
     React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost({...post, [name]: value})
  };


  return (
    <>
      <div className="mensagem">
        <div className="mensagem-container container">

          <h3 style={{"marginBottom" : "20px", "color": "777"}} >
            Tweetando!
          </h3>

          <form onSubmit={savePost}>

            <label htmlFor="autor">
              <input type="text" name="autor" 
                value={post.autor}
                onChange={ handleChange }
                placeholder="Me diga seu nome?" />
            </label>

            <label htmlFor="mensagem">
              <textarea name="mensagem" id="mensagem" cols={100} rows={5} 
                onChange={ handleChange }
                value={post.mensagem}
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
