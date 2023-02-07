// export default DisplayMovie
import React from 'react';

const DisplayMovie = (props) => {
  let { searchedMovie, movieArray, setMovieArray } = props;
  console.log(searchedMovie, "FROM DISPLAY_MOVIE");
  // console.log(searchedMovie.Ratings);
// let ratingsArray = searchedMovie.Ratings;
// console.log(ratingsArray)
//  ratingsArray.map((obj) =>{
//   <p>{obj.Value}</p>
  
//  })
//  console.log(ratingsArray)
const returnLoader = () =>{
  return(
    <div>
      loading..
    </div>
  )
}
const returnMovieRatings = () =>{
  if (searchedMovie) {
      let ratingsArray = searchedMovie.Ratings.map((obj) =>{
    
      return(
          <div>
            <h4>{obj.Source}</h4>
            <h5>{obj.Value}</h5>
          </div>
        )
      })
    return ratingsArray
    }
  }
  //if statements are needed to check if data is passed from searchedMovie to run the function and make sure it's not returning null
  const returnMovieJSX = () => {
    if (searchedMovie !== null) {
      return (
        <div>
        <h3>MOVIE DISPLAY</h3>
        <h4>{searchedMovie.Title}</h4>
        <p>{searchedMovie.Plot}</p>
        {/* <p>{ratingsArray}</p> */}
      {/* check if posterURL exists */}
        <img src={searchedMovie.Poster} alt="" />
        
      </div>
      )
    } else {
      return (
        <div>
          waiting for movie...
        </div>
      )
    }
  }

const handleClick = () => {
  console.log('clicked');
 
  // add title of current movie to that array (push it)
  if(!movieArray.includes(searchedMovie.Title)){
    setMovieArray([...movieArray, searchedMovie.Title])
  }

}

  return (
    <section 
      style={{borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px"}} 
      onClick={() => handleClick()}
    >
      {returnMovieJSX() }
      {returnMovieRatings()}
      {/* still looking for a way to incorporate the loader if the movie is null but! 
      I figured out how to put the movie rating in the display! use a function then 
      call the function in the function thats making the layout. which in this case would be returnMovieJSX(). only only object can be returned in the section from how the page reloads if you had two functions running in the section
      the code broke and when running in build, on the server it would not display the page. put a function to run in a function when the page is loaded seems better */}
    </section>
  )
}

export default DisplayMovie