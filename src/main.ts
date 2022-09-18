import "./style.css";
import { setupCounter } from "./counter";
import { charmander } from "./bases/06-decorators2";
// import { articuno } from "./bases/03-clases";

// const a = articuno.getImg()
// console.log('a', a)

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h3>Pokemon: ${charmander.name}</h3>
    </div>

  <div class="card">
    <button id="counter" type="button"></button>
  </div> 
    
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
