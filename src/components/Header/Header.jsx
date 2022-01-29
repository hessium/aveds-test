import React, {useContext, useState} from 'react';
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import {AuthContext} from "../../context/index";
import {Link} from 'react-router-dom';

import Modal from "../UI/Modal/Modal";


const Header = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [modal, setModal] = useState(false);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
      }

    return (
       <header className={styles.header}>
           <div className={styles.header__icon}>
              
               <Link to="/home">
                    <img src={logo} alt="logo" className={styles.header__logo}/> 
                </Link>   
                                   
           </div>
           <div className={styles.header__content}>
                <Link to="/contacts" className={styles.header__link}>Контакты</Link>
               {isAuth 
                ?<button  className={styles.header__btn} onClick={logout}>Выйти
                </button>  
                :<Link  className={styles.header__btn} to="/login"/*  onClick={() => setModal(true)} */>Войти
                </Link>   
                }     
                 <Modal visible={modal} setVisible={setModal}></Modal>      
                          
           </div> 
             
       </header>
    );
};

export default Header;