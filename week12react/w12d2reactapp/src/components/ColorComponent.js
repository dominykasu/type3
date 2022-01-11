const colorComponent = (comp) => {
    return(
        <div style={comp.flex}>


            <div style={comp.info[0]}>{comp.info[0].text}</div>
            <div style={comp.info[1]}>{comp.info[1].text}</div>
            <div style={comp.info[2]}>{comp.info[2].text}</div>

        </div>
    )
}
export default colorComponent