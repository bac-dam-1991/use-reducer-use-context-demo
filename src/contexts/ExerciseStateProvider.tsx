import * as React from "react";
import { ExerciseState, InitialState } from "../reducers/exerciseReducer";

export interface IExerciseContext {
	state: ExerciseState;
}

export const InitialValues: IExerciseContext = {
	state: InitialState,
};

const ExerciseStateContext =
	React.createContext<IExerciseContext>(InitialValues);

export default ExerciseStateContext;

export interface ExerciseStateProviderProps {}

export const useExerciseState = () => React.useContext(ExerciseStateContext);
