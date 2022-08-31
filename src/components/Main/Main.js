import "./Main.css";
import technologies from '../data/technologies';

function Main() {
    return(
        <mainarea2>
        {technologies.map(item=>
        <section>
        <h2>{item.title}</h2>
        <text>{item.body}</text>
        </section>)}
        </mainarea2>
    );
}

export default Main;