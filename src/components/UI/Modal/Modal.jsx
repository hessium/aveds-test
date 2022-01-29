import React, { useContext, useState, useEffect } from 'react';
import Cancel from "../../../images/cancel.svg"
import cl from "../Modal/Modal.module.scss";
import { AuthContext } from '../../../context/index';

const Modal = ({ visible, setVisible}) => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [nicknameDirty, setNicknameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nicknameError, setNicknameError] = useState('Логин не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  
 
  
  useEffect(() => {
    if(nicknameError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nicknameError, passwordError])

  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(isAuth)

  const nicknameHandler = (e) =>{
    setNickname(e.target.value)
    if(e.target.value.length < 4 || e.target.value.length > 10 ){
      setNicknameError('Некорректный логин')
    } else {
      setNicknameError('')
    }
  }

  const passwordHandler = (e) =>{
    setPassword(e.target.value)
    if (e.target.value.length < 8 || e.target.value.length > 14){
      setPasswordError('Пароль не должен быть короче 8 символов')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  
  

  const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active);
    }

    const blurHandler = (e) => {
      // eslint-disable-next-line default-case
      switch (e.target.name) {
        case 'nickname':
          setNicknameDirty(true)
          break
          // eslint-disable-next-line no-fallthrough
          case 'password':
          setPasswordDirty(true)
          break  
      }
    }

  return (
   
    <div className={rootClasses.join(' ')} >
            <div className={cl.myModalContent} >
              <div className={cl.myModalTitle}>
                <h1  style={{margin: '10px 0 15px 0'}}>Авторизация</h1> 
                <div className={cl.myModalCancel} 
                onClick={() => setVisible(false)}> 
                <img src={Cancel} alt="cancel" /> 
                </div>
                
                </div>
            
            <form  onSubmit={login}>
                {(nicknameDirty && nicknameError) && <div style={{color:"red"}}>{nicknameError}</div>}

                <input 
                onChange={e => nicknameHandler(e)} 
                value={nickname} onBlur={e => blurHandler(e)} 
                name='nickname' type="text" 
                className={cl.myInput}/>

                {(passwordDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}

                <input 
                onChange={e => passwordHandler(e)} 
                value={password} onBlur={e => blurHandler(e)} 
                name='password' type="password"  
                className={cl.myInput}/>   

                <button                   
                  onClick={() => setVisible(false)}
                  disabled={!formValid}  
                  type="submit"                               
                  className={cl.myButton} >
                    Войти 
                </button>
                   
                             
               
            </form>
            
            </div>
        </div>
     
     
  );
};

export default Modal;