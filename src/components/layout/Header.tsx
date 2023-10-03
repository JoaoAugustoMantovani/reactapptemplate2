import React from "react";
import App from "../../App";
import './Header.modules.css';

const Header : React.FC = () =>{
return(
    <header className="Header">
        <nav className="menu">
        <div className="logo">
            <a href="/"><img src="https://i.imgur.com/jYGrxgY.png" className="LogoMenu" alt="Ticket Manager"/></a>
        </div>
        <ul className="menu-list">
          <li className="menu-item"><a href="/createticket">Criar Ticket</a></li>
          <li className="menu-item"><a href="/history">Histórico</a></li>
          <li className="menu-item"><a href="">Gerenciar</a>
              <div className="dropdown-menu">
                <a href="/ticketmanagement">Ticket</a>
                <a href="/usermanagement">Usuário</a>
              </div>
          </li>
          </ul>
          </nav>
          </header>
        
        
        
        
        
        
        
        
        /*{ <div className="Header">
            
            <div className="HomeButton">
               <a href="/"> <img src="https://i.imgur.com/jYGrxgY.png" className="logo" alt= ""/></a>
            </div>
           

        </div>
        
    </header> }*/

)
}
 export default Header; 
