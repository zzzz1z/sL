
import './header.scss'
import image from '../images/APRESENTAÇÃO_STACKLINK-ai-brush-removebg-pwzqqew.png'
import { useNavigate } from 'react-router-dom';
 


function Header() {

    const nav = useNavigate();







    return (
        <div className='caixaP'>

            <div className='caixaN'>
                <img
                 className='sLaB' 
                 onClick={()=>nav('/')} 
                 src={image}
                 alt=''
                />
               

            </div>

           
            <div className='linee'>
            </div> 

            <div className='buttons'>

                <button onClick={()=>nav('/')} class="btn type1">
                 Casa
                </button> 


                <button onClick={()=>nav('/info')} class="btn type1">
                 Serviços
                </button>
  
                <button onClick={()=> nav('/contact')} class="btn type1">
                 Contactos
                </button>
  
           </div>
                

            
            <div className='line'>

            </div>
            

           

        </div>
        
    )

}

export default Header;