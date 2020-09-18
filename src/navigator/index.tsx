import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {
    createStackNavigator,
    HeaderStyleInterpolators,
    StackNavigationProp,
} from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import Detail from "@/pages/Detail";
import {Platform, StyleSheet} from "react-native";

export type RootStackParamList = {
    BottomTabs: {
        screen?: string;
    };
    Detail: {
        id: number;
    };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

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
                <Stack.Navigator
                    headerMode={"float"}
                    screenOptions={{
                        headerTitleAlign: "center",
                        headerStyleInterpolator:
                            HeaderStyleInterpolators.forUIKit,
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        headerStyle: {
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                },
                            }),
                        },
                    }}>
                    <Stack.Screen name={"BottomTabs"} component={BottomTabs} />
                    <Stack.Screen
                        options={{headerTitle: "Detail"}}
                        name={"Detail"}
                        component={Detail}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;
