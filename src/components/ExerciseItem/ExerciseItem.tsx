import * as React from "react";
import { useExerciseDispatch } from "../../contexts/ExerciseDispatchProvider";
import IExerciseItem from "../../domain/Interfaces/IExerciseItem";
import styles from "./ExerciseItem.module.css";

export interface ExerciseItemProps {
	data: IExerciseItem;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ data }) => {
	const { dispatch } = useExerciseDispatch();
	const handleRemoveExercise = () => {
		dispatch({ type: "remove", payload: data.id });
	};
	return (
		<div className={styles.container}>
			<p>{data.name}</p>
			<button onClick={handleRemoveExercise}>Remove</button>
		</div>
	);
};

export default ExerciseItem;
