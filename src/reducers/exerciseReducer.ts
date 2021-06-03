import IExerciseItem from "../domain/Interfaces/IExerciseItem";

export interface ExerciseState {
	exercises: IExerciseItem[];
}

export const InitialState: ExerciseState = {
	exercises: [],
};

export const EXERCISE_ACTIONS = {
	ADD_EXERCISE: "add",
	REMOVE_EXERCISE: "remove",
};

export type ExerciseAction =
	| {
			type: "add";
			payload: IExerciseItem;
	  }
	| { type: "remove"; payload: string };

const exerciseReducer = (
	state: ExerciseState,
	action: ExerciseAction
): ExerciseState => {
	switch (action.type) {
		case EXERCISE_ACTIONS.ADD_EXERCISE: {
			const newExercises: IExerciseItem[] = [
				...state.exercises,
				action.payload as IExerciseItem,
			];
			return {
				...state,
				exercises: newExercises,
			};
		}
		case EXERCISE_ACTIONS.REMOVE_EXERCISE: {
			const filteredExerciseList: IExerciseItem[] =
				state.exercises.filter(
					(item: IExerciseItem) => item.id !== action.payload
				);
			return { ...state, exercises: filteredExerciseList };
		}
		default: {
			return state;
		}
	}
};

export default exerciseReducer;
