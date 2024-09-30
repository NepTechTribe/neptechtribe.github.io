function Button({buttontext,buttonclass}){
    return(
        <>
        <button className={buttonclass}>{buttontext}</button>
        </>
    )
}

export default Button;