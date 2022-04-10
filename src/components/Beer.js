import React from "react";


const Beer = (props) => {

    const [likes, setLikes] = React.useState(0)

    function handleLike() {
        setLikes(prevState => prevState + 1)
    }


    return (
        <>
            <h4>{props.name}</h4>
            <p>{props.info}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like </button>
        </>
    )
}

export default Beer;