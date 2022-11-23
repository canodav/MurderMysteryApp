import {Game} from "../interfaces";
import {useNavigate} from "react-router-dom";

interface StoryButtonProps {
    story: Game;
}


export const StoryButton = (props: StoryButtonProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("Clicked!" + props.story.id);

        localStorage.setItem("gameId", props.story.id);
        navigate("/num-players", {state: {min_players: props.story.min_players, max_players: props.story.max_players}});
    };
    return (
        <div className="story-button" onClick={handleClick}>
           <div className="thumbnail">
                <img src={`../../public/assets/img/${props.story.thumbnail}`} alt={props.story.title} />
           </div>
           <div className="story-info">
                <h6>{props.story.title}</h6>
                <p>{props.story.description}</p>
                <p>Min players: {props.story.min_players} / Max:players: {props.story.max_players}</p>
           </div>
        </div>
    );
};