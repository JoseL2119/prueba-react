import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    const formatUserName = (userName) => `@${userName}`

    return(
        <div className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                name="José López" 
                userName="midudev"
            />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                name="Dilan Peña" 
                userName="pheralb"
            />

            <TwitterFollowCard 
                formatUserName={formatUserName}  
                name="Amén" 
                userName="elonmusk"
            />
        </div>
    )
}