import { useParams } from "react-router-dom";

export const  Act = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Act {id ? " a" : ""}</h1>
        </div>
    );
}