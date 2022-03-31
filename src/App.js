// import './App.css';
import "./style.css"
import Main from "./Main"
import Content from "./Content";

function Create(details){
  return(
    <Main
    key ={details.id}
    title = {details.title}
    text = {details.text}
    />
  )
  }
function App() {
  return (
    <div>
    
     <span>Emojis</span>
     {Content.map(Create)}
    </div>
  );
}

export default App;
