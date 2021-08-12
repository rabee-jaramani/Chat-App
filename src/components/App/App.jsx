
import { Route,Switch, useHistory } from "react-router-dom"
import { Login,Chat,Signup } from 'components'
import { useAuth, useResolved } from "hooks";
import { useEffect } from "react";
import { ChatProvider } from "context/ChatContext";
import 'semantic-ui-css/semantic.min.css';

export const App = () => {
const history=useHistory();
const {authUser}=useAuth();
const authResolved=useResolved(authUser)
useEffect(() => {
    // if user exist
    if(authResolved)
    {
        // if user logged in push chat page if not push login
        history.push(authUser ? '/' : '/login')
    }    
}, [authUser,authResolved,history])


    return authResolved ? (
        <ChatProvider authUser={authUser}>
            <div className='app'>  
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/signup' component={Signup}></Route>
                        <Route exact path='/' component={Chat}></Route>
                    </Switch>
            </div>
    
    </ChatProvider>
    ) : (
      <>Loading...</>
    );
}