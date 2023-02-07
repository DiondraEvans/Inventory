// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Search = (props) => {
// //above props allows search to get information from the parent
//     let {setSearchedMovie} = props;
//     let user = props.user
    
//     let { logString } = props;
//     // logString("This string is from Search Child Component!")
//     // console.log(user);
//     const [searchString, setSearchString] = useState('');

//     useEffect(() => {
//         // make this movie call randomly choose between 10 movies
//         console.log("making api call");
//         makeServerCall("Pacific Rim")
//     }, []);
//     // listen for submit and make call to server






//     const handleChange = (e) => {
//         console.dir(e.target.value); // What the element value WOULD BE after the change
//         let newValue = e.target.value;
//         // was t
//         // e.target.value is th
//         setSearchString(newValue)
//         //above is setting newValue to searchString. looking further below
//         //you'll see search string is used as a parameter to access and send info to a route in express
//     }
      

//     const makeServerCall = async (string) => {
//         let serverResponse = await axios({
//             method: 'GET',
//             url: `http://localhost:5000/get_movie/${string}`
//         });
//         console.log(serverResponse);
//         setSearchString('');
//         setSearchedMovie(serverResponse.data);
//     }


//     const handleSubmit = async (e) => {
//         //we have to do this with react fetches because of the way we are reciving data to the DOM
//         e.preventDefault()

//         console.log("submitting!");
//         // if we don't prevent the default, the page will refresh
//         // call express server with the string
//         makeServerCall(searchString)







//         // console.log("submitting!");
//         // // if we don't prevent the default, the page will refresh
//         // // call express server with the string
//         // let serverResponse = await axios({
//         //     method: 'GET',
//         //     url: `http://localhost:5000/get_movie/${searchString}`
//         // });
//         // console.log(serverResponse);
//         // setSearchedMovie(serverResponse.data)
//     };


    
// // below is where we do the displaying above is where are functionality happens
//   return (
//     <section style={{borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px"}}>
//         <h3>Search</h3>
//         <form onSubmit={(event) => handleSubmit(event)}>
//             <label htmlFor="movie-search">Type the name of the movie you want to see!</label>
//             <input 
//                 type="search" 
//                 name="movie-search" 
//                 value={searchString} 
//                 placeholder="movie name" 
//                 //recording the current value with handle change. handle change is like using .value when getting an element by ID then tagging on .value when you click sumbit, except tit captures value with every state change. listening for submit to make a request to our server
//                 onChange={(event) => handleChange(event)}
//             />
        
//             <button type="">click me!</button>
//         </form>
//     </section>
//   )
// };

// export default Search;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


const Search = (props) => {
    let {setSearchedMovie} = props;
    let isFirstRender = useRef(true);
    // logString("This string is from Search Child Component!")
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        // make this movie call randomly choose between 10 movies
        if (isFirstRender.current === true) {
            console.log("making api call");
            isFirstRender.current = false;
            makeServerCall("Pacific Rim")
        }
    }, []);
    // listen for submit and make call to server

    const handleChange = (e) => {
        console.dir(e.target.value); // What the element value WOULD BE after the change
        let newValue = e.target.value;
        // was t
        // e.target.value is th
        setSearchString(newValue)
    }

    const makeServerCall = async (string) => {
        let serverResponse = await axios({
            method: 'GET',
            url: `get_movie/${string}`
        });
        console.log(serverResponse);
        setSearchString('');
        setSearchedMovie(serverResponse.data);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitting!");
        // if we don't prevent the default, the page will refresh
        // call express server with the string
        makeServerCall(searchString)
    };

  return (
    <section style={{borderBottom: "4px solid black", marginBottom: "20px", paddingBottom: "12px"}}>
        <h3>Search</h3>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="movie-search">Type the name of the movie you want to see!</label>
            <input 
                type="search" 
                name="movie-search" 
                value={searchString} 
                placeholder="movie name" 
                onChange={(event) => handleChange(event)}
            />
            <button type="">click me!</button>
        </form>
    </section>
  )
};

export default Search;