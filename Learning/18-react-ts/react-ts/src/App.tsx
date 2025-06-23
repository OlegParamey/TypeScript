import { useState } from 'react';

import Header from './components/Header';
import CourseGoals from './components/CourseGoals';
import NewGoal from './components/NewGoal';
import goalsImg from './assets/goals.jpg';

function App() {
	const [goals, setGoals] = useState([
		{
			id: 1,
			title: 'Learn TS',
			description: 'Learn TS from the ground up',
		},
		{
			id: 2,
			title: 'Practice TS',
			description: 'Practice working with TypeScript',
		},
	]);

	function handleDeleteGoal(id: number) {
		setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
	}

	function handleAddGoal(text: string, summary: string) {
		setGoals((prevGoals) =>
			prevGoals.concat({ id: Math.random(), title: text, description: summary })
		);
	}

	return (
		<main>
			<Header image={{ src: goalsImg, alt: 'A list of goals' }}>
				<h1>Your Course Goals</h1>
			</Header>
			<NewGoal onAdd={handleAddGoal} />
			<CourseGoals onDelete={handleDeleteGoal} goals={goals} />
		</main>
	);
}

export default App;
