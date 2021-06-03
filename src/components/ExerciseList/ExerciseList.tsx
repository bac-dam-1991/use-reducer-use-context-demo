import * as React from "react";
import { useExerciseState } from "../../contexts/ExerciseStateProvider";
import IExerciseItem from "../../domain/Interfaces/IExerciseItem";
import ExerciseItem from "../ExerciseItem/ExerciseItem";
import styles from "./ExerciseList.module.css";

export interface ExerciseListProps {}

const ExerciseList: React.FC<ExerciseListProps> = () => {
	const { state } = useExerciseState();

	return (
		<div className={styles.container}>
			{state.exercises.map((item: IExerciseItem) => (
				<ExerciseItem data={item} key={item.id} />
			))}
		</div>
	);
};

export default ExerciseList;
