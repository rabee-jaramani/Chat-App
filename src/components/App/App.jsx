// import { useEffect } from "react"
// import {fb} from 'service'
  
import { Route,Switch } from "react-router-dom"
import { Login,Chat,Signup } from 'components'


export const App = () => {
// useEffect(()=>{
//     fb.firestore.collection('chatUsers').where('userName','==','rabee').get().then(res=>{
//         const user=res.docs[0].data();
//         console.log(user);
//     }) 
// },[])

    return(
            <div className='app'>  
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/signup' component={Signup}></Route>
                        <Route exact path='/' component={Chat}></Route>

                    </Switch>
            </div>
    )
}