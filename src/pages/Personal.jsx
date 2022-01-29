import React, {useContext} from 'react';
import {AuthContext} from '../context/index';
import { Link } from 'react-router-dom';


const Personal = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
 
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
      }

    return (
        <div className="personal">           
              <h1 className="personal__title">Привет, Сергей</h1>
             <div className="home__buttons">
                 <button onClick={logout} className="home__btn home__btn--login">Выйти из аккаунта</button>               
                <button  className="home__btn home__btn--white"><Link to="/contacts"  style={{color : "#FF685B"}}>Перейти в контакты</Link></button> 
             </div>                                            
        </div>
    );
};

export default Personal;