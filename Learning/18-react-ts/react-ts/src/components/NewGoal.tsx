import { useRef, type FormEvent } from 'react';

interface NewGoalProps {
	onAdd: (text: string, summary: string) => void;
}

export default function NewGoal({ onAdd }: NewGoalProps) {
	const goalRef = useRef<HTMLInputElement>(null);
	const summaryRef = useRef<HTMLInputElement>(null);

	function handleSubmission(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const enteredGoal = goalRef.current!.value;
		const enteredSummary = summaryRef.current!.value;

		// validation ...
		onAdd(enteredGoal, enteredSummary);
	}
	return (
		<form onSubmit={handleSubmission}>
			<p>
				<label htmlFor="goal">Your goal</label>
				<input id="goal" type="text" ref={goalRef} />
			</p>
			<p>
				<label htmlFor="summary">Short Summary</label>
				<input id="summary" type="text" ref={summaryRef} />
			</p>
			<p>
				<button type="submit">Add Goal</button>
			</p>
		</form>
	);
}
