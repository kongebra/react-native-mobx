import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TodoList from "../todos/todo-list";

const MainNavigator = createStackNavigator(
    {
        todoList: {
            screen: TodoList,
            navigationOptions: () => ({
                title: "Mobx React Lite"
            })
        }
    },
    {
        initialRouteName: "todoList"
    }
);

const RootNavigation = createAppContainer(MainNavigator);

export default RootNavigation;
