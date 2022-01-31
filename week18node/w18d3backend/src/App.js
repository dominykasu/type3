
import './App.css';
import {useState} from "react";
import {useRef} from "react";





function App() {

    const input = useRef()
    const userCount = useRef()



    const [getData,setData] = useState(null)
const [ getUsers,setUsers] = useState([])
    async function getInfo(){

        const res = await fetch("http://localhost:4000/check/"+input.current.value)
        const data = await res.json()

        console.log(data)
        // setData(data.info[`whois.domreg.lt`])
        //jei skiriasi startas
        const keys = Object.keys(data.info)
        console.log(keys)
        setData(data.info[keys[0]])

    }

    async function showUsers(){
        const res = await fetch("http://localhost:4000/userGen/"+userCount.current.value)
        const data = await res.json()

        setUsers(data)
        console.log(getUsers)
    }

////////////////

    const emailField = useRef()
    const pass1Field = useRef()
    const pass2Field = useRef()


async function register() {

    const email = emailField.current.value
    const pass1 = pass1Field.current.value
    const pass2 = pass2Field.current.value

    const reg = {
        email: email,
        pass1: pass1,
        pass2: pass2
    }

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(reg)
    }
    fetch("http://localhost:4000/reg", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

//my fail try V below

//     const res = await fetch('http://localhost:4000/reg', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(reg),
//     }).then(res =>res.json())
//     const data = res
//
//     console.log(data.body)
// }
    const emailFieldLogin = useRef()
    const passwordFieldLogin = useRef()


    async function login() {

        const emailLogin = emailFieldLogin.current.value
        const passwordLogin = passwordFieldLogin.current.value


        const login = {
            email: emailLogin,
            password: passwordLogin

        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(login)
        }
        fetch("http://localhost:4000/login", options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const deleteEmail1 = useRef()
    const deleteKey1 = useRef()

    async function remove() {

        const deleteEmail = deleteEmail1.current.value
        const deleteKey = deleteKey1.current.value


        const remove = {
            email: deleteEmail,
            secretKey: deleteKey

        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(remove)
        }
        fetch("http://localhost:4000/delete", options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const photo = useRef()

    function addPhoto(){

        const image = photo.current.value


        const imageTest = {
            image:image
        }
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(imageTest)
        }
        fetch("http://localhost:4000/addPhoto", options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

const [getPhotos,setPhotos] = useState(null)

    async function showPhoto(){
        fetch("http://localhost:4000/showPhoto")
            .then(res => res.json())
            .then(data => {
                setPhotos(data)
                console.log(data)
            })


    }

  function deletePhoto(x,index){
      console.log(index)
const removeIndex = index





          const remove = {
              remove: removeIndex

          }

          const options = {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify(remove)
          }
          fetch("http://localhost:4000/removePhoto", options)
              .then(res => res.json())
              .then(data => {
                  console.log(data)
              })
      }



  return (
    <div className="App">
     <input ref={input} type="text"/>
        <button onClick={getInfo}>Get Info</button>

        {getData && <div>
            <div>{getData["Domain Name"]}</div>
            <div>{getData["Expiry Date"]}</div>
        </div>}

<div>
    <input ref={userCount} type="number"/>
    <button onClick={showUsers}>Show Users</button>
    {getUsers && getUsers.map(x=><div><h1>{x.name}</h1>
        <img src={x.photo}/>
        <h3>{x.city}</h3></div>)
    }
</div>
<div>
    <input ref={emailField} type="text"/>
    <input ref={pass1Field} type="text"/>
    <input ref={pass2Field} type="text"/>
    <button onClick={register}>Register</button>
</div>
        <div>
            <input ref={emailFieldLogin} type="text"/>
            <input ref={passwordFieldLogin} type="text"/>

            <button onClick={login}>Login</button>
        </div>
        <div>
            <input ref={deleteEmail1} type="text"/>
            <input ref={deleteKey1} type="text"/>

            <button onClick={remove}>Remove</button>
        </div>
        <div>

            <input ref={photo} type="text"/>

            <button onClick={addPhoto}>Add Image</button>
        </div>
        <button onClick={showPhoto}>Show Image</button>
        {getPhotos && getPhotos.map(((x,index)=><div key={index}>
            <img onClick={() => deletePhoto(x,index)} src={x.image}/>
           </div>)
        )
        }
    </div>
  );
}

export default App;
