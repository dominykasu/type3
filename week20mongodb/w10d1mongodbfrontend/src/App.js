
import './App.css';
import {useRef, useState} from "react";
import {useEffect} from "react";

function App() {

  const model = useRef()
  const year = useRef()
  const color = useRef()
  const gasConsumption = useRef()
  const power = useRef()
  const findModel = useRef()


  function postCar(){

    const carModel = model.current.value
    const carYear = year.current.value
    const carColor = color.current.value
    const carGas = gasConsumption.current.value
    const carPower = power.current.value


    const postCar = {
      model: carModel,
      year:carYear,
      color:carColor,
      gasConsumption:carGas,
      power:carPower,

    }

    console.log(postCar)
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postCar)
    }

    fetch("http://localhost:4000/addCar", options)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
  }

  let carArr = []




      async function findCar(){
        const carModel = findModel.current.value

        await  fetch("http://localhost:4000/getModel/"+carModel)
            .then(res => res.json())
            .then(data => {
              // carArr.push(data)
              console.log(data)
            })





  }

  const select = useRef()
  const valueF = useRef()

  const [items, setItems] = useState([
    {
      label: "Color",
      value: "Color"
    },
    { label: "Model", value: "Model" },
    { label: "Year", value: "Year" }
  ])

  const [getSelect, setSelect] = useState(null)

  function searchCar(){

    const valueField = valueF.current.value
    const selectField = getSelect

    const searchCar = {
     valueFld: valueField,
      selectFld: selectField

    }

    console.log(searchCar)
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(searchCar)
    }

    fetch("http://localhost:4000/searchCar", options)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })

  }

  return (
    <div className="App">
      <div>
        <input ref={model} type="text" placeholder="model"/>
        <input ref={year} type="text" placeholder="year"/>
        <input ref={color} type="text" placeholder="color"/>
        <input ref={gasConsumption} type="text" placeholder="gasConsumption"/>
        <input ref={power} type="text" placeholder="power"/>


        <button onClick={postCar}>post Car</button>
      </div>
      <div>
        <input ref={findModel} type="text" placeholder="model"/>
        <button onClick={findCar}>Find Cars</button>
      </div>

      <div>
        <select onChange={e => setSelect(e.currentTarget.value)}>
          {items.map(({ label, value }) => (
              <option  ref={select} key={value} value={value}>
                {label}
              </option>
          ))}
        </select>
      {/*<select id="cars" name="cars">*/}
      {/*  <option ref={select} value="volvo">Volvo</option>*/}
      {/*  <option ref={select} value="saab">Saab</option>*/}
      {/*  <option ref={select} value="fiat">Fiat</option>*/}
      {/*</select>*/}
        <input  ref={valueF} type="text"/>
        <button onClick={searchCar}>Search Car</button>
      </div>
    </div>
  );
}

export default App;
