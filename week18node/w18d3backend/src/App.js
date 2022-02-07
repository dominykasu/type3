
import './App.css';
import {useEffect, useState} from "react";
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


    const title1 = useRef()
    const description1 = useRef()
    const username1 = useRef()
    const password11 = useRef()
    const password21 = useRef()
    const email1 = useRef()

      function createPost(){


          const title = title1.current.value
          const description = description1.current.value
          const username = username1.current.value
          const password1 = password11.current.value
          const password2 = password21.current.value
          const email = email1.current.value

          // console.log(title, description, username, password1, password2, email)

          const createPost = {
              title: title,
              description:description,
              username:username,
              password1:password1,
              password2:password2,
              email:email

          }
          // const createPost = {
          //     title: "lalalatitle",
          //     description:"asdasdasdadsd",
          //     username:"USERNAME",
          //     password1:"password1",
          //     password2:"password1",
          //     email:"email@email.lt"
          //
          // }
          console.log(createPost)
          const options = {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify(createPost)
          }
          fetch("http://localhost:4000/createPost", options)
              .then(res => res.json())
              .then(data => {
                  console.log(data)
              })
      }

      const [getPostsArr, setPostsArr] = useState(null)

    // setInterval(()=>{
    //
    //
    // })
    useEffect(() => {
        async function posts(){
            await  fetch("http://localhost:4000/showPosts")
                .then(res => res.json())
                .then(data => {
                    setPostsArr(data)
                    // console.log(getPostsArr)
                })
        }
        posts()
    },[])

    function deletePost(x,index){

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
        fetch("http://localhost:4000/removePost", options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const model = useRef()
    const year = useRef()
    const color = useRef()
    const gasConsumption = useRef()
    const power = useRef()


    function postCar(){

        const carModel = model.current.value
        const carYear = year.current.value
        const carColor = color.current.value
        const carGas = gasConsumption.current.value
        const carPower = power.current.value


        // console.log(title, description, username, password1, password2, email)

        const postCar = {
            model: carModel,
            year:carYear,
            color:carColor,
            gasConsumption:carGas,
            power:carPower,

        }

        // console.log(createPost)
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postCar)
        }
        fetch("http://localhost:4000/createPost", options)
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

        <div>
            <input ref={title1} type="text" placeholder="title"/>
            <input ref={description1} type="text" placeholder="description1"/>
            <input ref={username1} type="text" placeholder="username1"/>
            <input ref={password11} type="text" placeholder="password11"/>
            <input ref={password21} type="text" placeholder="password21"/>
            <input ref={email1} type="text" placeholder="email1"/>

            <button onClick={createPost}>CreatePost</button>
        </div>
        {getPostsArr && getPostsArr.map(((x,index)=><div key={index}>
            <h1>{x.title}</h1>
            <button onClick={() => deletePost(x,index)}>Delete Post</button>
                {/*<img src={x.image}/>*/}
            </div>)
        )
        }

        <div>
            <input ref={model} type="text" placeholder="model"/>
            <input ref={year} type="text" placeholder="year"/>
            <input ref={color} type="text" placeholder="color"/>
            <input ref={gasConsumption} type="text" placeholder="gasConsumption"/>
            <input ref={power} type="text" placeholder="power"/>


            <button onClick={postCar}>post Car</button>
        </div>
    </div>
  );
}

export default App;
