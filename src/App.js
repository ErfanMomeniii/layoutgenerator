
import React,{useEffect,useState,Fragment} from "react";
import logo from './logo.svg';
import './App.css';
import Draw from './components/Draw';
import { render } from "@testing-library/react";
function App() {

  function generate(e){
  const u=e.target.value;
  let w=[];
console.log(document.getElementById('sizee'));
if(document.getElementById('sizee')!=null){
  document.getElementById('sizee').remove();
}
  w=u.split("/");
  let xl=0;
  let l=0;
  let sm=0;
  for(let i=0;i<w.length;i++){
    if(w[i][w[i].length-1]=='L'){
      if(w[i].length==1){
        l=1;
      }else if(w[i][w[i].length-2]!='X'){

        l=parseInt(w[i].slice(0,w[i].length-1));
      }else if(w[i][w[i].length-2]=='X'){
        if(w[i].length==2){
          xl=1;
        }else{
          xl=parseInt(w[i].slice(0,w[i].length-2))
        }
      }
    }
    else{
      if(w[i].length==2){
        sm=1;
      }else{
        sm=parseInt(w[i].slice(0,w[i].length-2));
      }
    }
  }
  render(
    <div id='sizee'>
      
  <Draw o="XL" num={xl}/>
  <Draw o="L" num={l}/>
  <Draw o="SM" num={sm}/>
  </div>
  );  
  }
  return (
    <Fragment>
      <div class='App-header'>

<h1>Layout Generator</h1>        
        <label for="sizes">Select:</label>

<select name="sizes" id="sizes" onChange={generate} >
  <option></option>
  <option value="XL"   >XL</option>
  <option value="2XL" >2XL</option>
  <option value="4L" >4L</option>
  <option value="XL/2L" >XL/2L</option>
  <option value="XL/L/2SM" >XL/L/2SM</option>
</select>
      </div>
    </Fragment>
  );
}

export default App;
