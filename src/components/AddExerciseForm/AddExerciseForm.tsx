import * as React from "react";
import IExerciseItem from "../../domain/Interfaces/IExerciseItem";
import { v4 as uuid } from "uuid";
import { useExerciseDispatch } from "../../contexts/ExerciseDispatchProvider";

export const FORM_ID = "add-exercise-form";

export interface AddExerciseFormProps {}

const AddExerciseForm: React.FC<AddExerciseFormProps> = () => {
	const { dispatch } = useExerciseDispatch();
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = document.getElementById(FORM_ID) as HTMLFormElement;
		const exerciseNameInput = form.elements.namedItem(
			"exerciseName"
		) as HTMLInputElement;
		try {
			const exerciseName: string = exerciseNameInput.value.trim();
			if (!exerciseName) {
				throw new Error("Exercise name cannot be empty.");
			}
			const newExercise: IExerciseItem = {
				id: uuid(),
				name: exerciseNameInput.value,
			};
			dispatch({ type: "add", payload: newExercise });
			exerciseNameInput.value = "";
		} catch (error) {
			alert(error.message);
		} finally {
			exerciseNameInput.focus();
		}
	};
	return (
		<form onSubmit={handleSubmit} id={FORM_ID}>
			<input
				type="text"
				placeholder="Exercise name"
				maxLength={30}
				name="exerciseName"
				autoFocus
			/>
			<input type="submit" value="Add" />
		</form>
	);
};

export default AddExerciseForm;
