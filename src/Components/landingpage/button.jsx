import { useNavigate } from 'react-router-dom';



function Button({buttontext,buttonclass , buttoncontainer ,location}){

    const navigate = useNavigate();

    const handleClick = () => {
      navigate(location);
    };


    return(
        <>
        <div className={buttoncontainer} >
        <button className={buttonclass}  onClick={handleClick}>{buttontext}</button>
        </div>
        </>
    )
}

export default Button;