import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";

type RootStackParamList = {
    Home: undefined;
    Detail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
/*
 * {
 *   Navigator,
 *   Screen
 * }
 * */

class Navigator extends React.Component<any, any> {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerTitleAlign: "center"}}>
                    <Stack.Screen options={{headerTitle: "Home"}} name={"Home"} component={Home} />
                    <Stack.Screen options={{headerTitle: "Detail"}} name={"Detail"} component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;
