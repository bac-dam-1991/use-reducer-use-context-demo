import * as React from "react";
import { ExerciseAction } from "../reducers/exerciseReducer";

export interface IExerciseContext {
	dispatch: React.Dispatch<ExerciseAction>;
}

export const InitialValues: IExerciseContext = {
	dispatch: (value: ExerciseAction) => {},
};

const ExerciseDispatchContext =
	React.createContext<IExerciseContext>(InitialValues);

export default ExerciseDispatchContext;

export const useExerciseDispatch = () =>
	React.useContext(ExerciseDispatchContext);
