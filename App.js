
import './App.css';
import Axios from 'axios';
function App(){
  const getNews=()=>{
    Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=df95bb400c3c46f780b5546a0351d298")
    .then((response)=>{
      console(response)
    })
  }
    return (
    
      <>
      <div>
        <button classname='App'onclick={getNews}>GET NEWS</button>
        </div>
      </>
    );
}

export default App;
