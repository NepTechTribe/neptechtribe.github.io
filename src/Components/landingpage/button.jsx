function Button({buttontext,buttonclass , buttoncontainer}){
    return(
        <>
        <div className={buttoncontainer} >
        <button className={buttonclass}>{buttontext}</button>
        </div>
        </>
    )
}

export default Button;