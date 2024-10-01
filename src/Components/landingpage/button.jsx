function Button({buttontext,buttonclass}){
    return(
        <>
        <div className="Button-container">
        <button className={buttonclass}>{buttontext}</button>
        </div>
        </>
    )
}

export default Button;