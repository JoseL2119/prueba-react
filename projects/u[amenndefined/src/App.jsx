import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    const formatUserName = (userName) => `@${userName}`

    return(
        <div className='App'>
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                name="José López" 
                userName="midudev"
            />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing 
                name="Dilan Peña" 
                userName="pheralb"
            />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                isFollowing={false} 
                name="Amén" 
                userName="elonmusk"
            />
        </div>
    )
}