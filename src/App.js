import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../src/router/index';
import { useEffect, useState } from 'react';
import {AuthContext} from './context';



function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
         <BrowserRouter>
              <Header/>
          {isAuth 
           ? 
           <Switch>
           {privateRoutes.map(route =>
             <Route
               component={route.component}
               path={route.path}
               exact={route.exact}
               key={route.path}
             />
             )}
                <Redirect to="/personal"/>          
          </Switch>
           : 
           <Switch>
           {publicRoutes.map(route =>
             <Route
               component={route.component}
               path={route.path}
               exact={route.exact}
               key={route.path}
             />
             )}   
                          
          </Switch>
          
           } 
            
        </BrowserRouter>
      </AuthContext.Provider>
    
    </div>
  );
}

export default App;
