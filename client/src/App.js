import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import PageNotFound from './components/pages/page-not-found.component';
import Homepage from './components/pages/home.component';


function App() {
  return (
	<Router>
		<div className="App">
			<Navbar />
			<br/>
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/exercises" element={<ExercisesList />} />
				<Route path="/edit/:id" element={<EditExercise />} />
				<Route path="/create" element={<CreateExercise />} />
				<Route path="/user" element={<CreateUser />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	</Router>
  );
}

export default App;
