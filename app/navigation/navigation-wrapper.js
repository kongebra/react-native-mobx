import React from "react";
import RootNavigation from "./root-navigation";
import { TodoProvider } from "../todos/todo-context";

// import TodoStore from '../todos/todo-store.js'
const stores = {};

export default function NavigationWrapper() {
    return (
        <TodoProvider>
            <RootNavigation />
        </TodoProvider>
    );
}
