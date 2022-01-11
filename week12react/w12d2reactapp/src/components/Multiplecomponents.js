const multiple = (stuff) => {
    return(
        <div>
<img src = {stuff.photo}/>
            <h2>{stuff.info.name}</h2>
            <h2>{stuff.info.age}</h2>
            <h2>{stuff.info.city}</h2>
            <h3>{stuff.phone}</h3>
        </div>
    )
}

export default multiple