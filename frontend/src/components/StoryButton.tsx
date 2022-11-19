import {Game} from "../interfaces";

interface StoryButtonProps {
    story: Game;
}


export const StoryButton = (props: StoryButtonProps) => {
    const handleClick = () => {
        console.log("Clicked!" + props.story.id);
        fetch("http://localhost:4000/api/room/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                gameId: props.story.id,
            }),
        })
    };
    return (
        <div className="story-button" onClick={handleClick}>
           <div className="thumbnail">
                <img src={`../../public/assets/img/${props.story.thumbnail}`} alt={props.story.title} />
           </div>
           <div className="story-info">
                <h6>{props.story.title}</h6>
                <p>{props.story.description}</p>
                <p>{props.story.num_players} players</p>
           </div>
        </div>
    );
};