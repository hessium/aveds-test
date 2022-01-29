import React, { useContext} from 'react';
import heart from "../images/heart.svg";
import stethoscope from "../images/stethoscope.svg";
import plan from "../images/plan.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';



const Home = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth)
  

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
      }

    return (
        <div className="home">
            <div className="home__content">
            <h1 className="home__title">Место для получения медицинской помощи</h1>
            <div className="home__buttons">               
            {isAuth    
                ?<Link   className="home__btn home__btn--login" onClick={logout}>
                     Выйти из аккаунта  
                </Link>   
                :<Link  className="home__btn" to="/login">
                     Войти
                </Link>
            } 
                   
                <Link to="/contacts" className="home__btn home__btn--contacts home__btn--white">Контакты</Link>
            </div>
            <div className="home__product">
                <ul className="product__list list">
                    <li className="product__item item">
                       <img src={heart} alt="heart" className="item__img"/> 
                        <h3 className="item__title">Онлайн-прием</h3>
                        <div className="item__span"></div>
                        <p className="item__desc">Рыба текст</p>
                    </li>  
                    <li className="product__item item">
                       <img src={stethoscope} alt="heart" className="item__img"/> 
                        <h3 className="item__title">Экстренный Случай</h3>
                        <div className="item__span"></div>
                        <p className="item__desc">Рыба текст</p>
                    </li>  
                    <li className="product__item item">
                       <img src={plan} alt="heart" className="item__img"/> 
                        <h3 className="item__title">Лечение рака</h3>
                        <div className="item__span"></div>
                        <p className="item__desc">Рыба текст</p>
                    </li>
                    
                </ul>  
            </div>
            </div>
           
            
        </div>
        
    );
};

export default Home;