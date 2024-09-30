function Head({head,description}){
    return(
        <>
        <div className="Head">
        <h1 className="Head-title">{head}</h1>
        <p className="Head-description">{description}</p>
        </div>
        </>
    )
}

export default Head;