# useContext and useReducer Demo App in React Typescript

This example App shows the use of both `useContext` and `useReducer` hooks to manage application wide states in a React app.

## Getting started

Clone this repository and run `npm install` at the project's root directory.

## Why use the `useReducer` hook?

The `useReducer` hook simplifies complex state logic. This hook is preferred over the `useState` hook in these situations.

## Why use the `useContext` hook?

The `useContext` hook allows for the application to pass application-wide, or at least inter-component, props. This hook eliminates the issue of `prop-drilling` related to deeply nested components.

## Why Typescript?

The demo uses Typescript because type-safing is fun and compile errors are better than runtime errors.

## Why are there two contexts for the one reducer?

In the demo, two contexts are setup for the one reducer:

1. `ExerciseStateContext`
2. `ExerciseDispatchContext`
   The reason is to reduce unnecessary re-rendering since some components only need do dispatch an action (e.g., `AddExerciseForm`), and some components only need to receive the state (e.g. `ExerciseList`), while others may need both (e.g., `ExerciseItem`)

Feel free to comment and ping me for discussions.

Cheers,

Bac
