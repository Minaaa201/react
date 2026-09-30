// import { useEffect, useState } from "react";


// function App() {

// const [marker, setMarker] = useState("Маркер с колпаком") //изменяет состояние

//   useEffect(() => {//действия/состояние после изменения
//     console.log("Компонент изменился на экране");


//   }, [marker]) // без этого отслеживает изменения всего сайта, с этим отслеживает изменения ТОЛЬКО маркера

//   return (
//     <div className="App">
//       <p>{marker}</p>
//       <button onClick={()=> {
//         setMarker("Маркер без колпака")
//       }}>Снять колпак</button>
//     </div>
//   );
// }

// export default App;

import { useEffect , useState} from "react";


function App() {
const [todos, setTodoc] = useState([])
const [text, setText] = useState("")


  return(
    <div className="App">

      <h3>Todolist</h3>
      <div className="form_list">
        <div className="add_date">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Новая задача..."/>
          <button>Добавить</button>
        </div>

        <div>
          <h1>Список задач</h1>
          <ul>
            {todos.map((todo)=> {
              <li key={}>
                {{todo}}
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;


