import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import './TwitterFollowCard.css'
export function App(){
    const addAt = (username) => `@${username}`
    return(
    <section className="App">
    <TwitterFollowCard isFollowing username="nidudev" name="Miguel Angel Duran"/>
    <TwitterFollowCard isFollowing username="juaniilsiias" name="Juan Osorio Chavez"/>
    <TwitterFollowCard isFollowing={false} username="peruanoooo" name="Palomo Guzman Suavecini"/>

    </section>
    )
}