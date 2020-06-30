import React from "react";
import No_Img_Avail from "../movies/No_Img_Avail.jpg"


const MovieItem = props => {
    const { original_title, poster_path, vote_average } = props.movie;

    return (
        <div className="card text-center">
            {(poster_path !== null)
                ? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    style={{ width: "200px" }}
                    alt={`IMDB : ${vote_average}`}
                />
                : <img src={No_Img_Avail}
                    style={{ width: "200px" }}
                    alt={`IMDB : ${vote_average}`}
                />}

            <h4>{original_title}</h4>
            {vote_average}
        </div>
    );
};

export default MovieItem;
/* if you want to use a state is a class based component you have use "this.state"

 <div className="card text-center">
 <div className="row">
      { //Check if message failed
        (this.state.message === 'failed')
          ? <div> Something went wrong </div>
          : <div> Everything in the world is fine </div>
      }
    </div>

if you want to use style in JSX use double {{style="backgroundColor:'red'}}
destructuring state, use under render() like this-- const {id, login, name}= this.state
--- when creating a functional component props are passed in the function like (const MovieItem = (props) => ) and we
dont need "this." anymore alson we dont need render() and Component
*/
