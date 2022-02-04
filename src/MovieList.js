import React, { useState } from 'react';
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';
import './add.css';


const MovieList = ({ movies, addMovie }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			{movies.map((movie) => (
				<div className='image-container'>

					<MovieCard movies={movie} />

				</div>
			))}
			<button className='btnadd' onClick={handleShow}>add</button>
			<Add addMovie={addMovie} show={show} handleClose={handleClose} />
		</>
	);
};

export default MovieList;