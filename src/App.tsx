import * as React from "react";
import "./App.css";
import AddExerciseForm from "./components/AddExerciseForm/AddExerciseForm";
import ExerciseList from "./components/ExerciseList/ExerciseList";
import ExerciseDispatchContext from "./contexts/ExerciseDispatchProvider";
import ExerciseStateContext from "./contexts/ExerciseStateProvider";
import exerciseReducer, { InitialState } from "./reducers/exerciseReducer";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	const [state, dispatch] = React.useReducer(exerciseReducer, InitialState);
	return (
		<main>
			<h1>Exercise tracker</h1>
			<ExerciseDispatchContext.Provider value={{ dispatch }}>
				<AddExerciseForm />
				<ExerciseStateContext.Provider value={{ state }}>
					<ExerciseList />
				</ExerciseStateContext.Provider>
			</ExerciseDispatchContext.Provider>
		</main>
	);
};

export default App;
