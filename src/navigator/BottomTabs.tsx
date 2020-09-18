import React from "react";
import {RouteProp, TabNavigationState} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "@/pages/Home";
import Listen from "@/pages/Listen";
import Found from "@/pages/Found";
import Account from "@/pages/Account";
import {RootStackNavigation, RootStackParamList} from "@/navigator/index";

export type BottomTabsParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
};

type Route = RouteProp<RootStackParamList, "BottomTabs"> & {
    state?: TabNavigationState;
};

interface Props {
    navigation: RootStackNavigation;
    route: Route;
}

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

function getHeaderTitle(route: Route) {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || "Home";

    switch (routeName) {
        case "Home":
            return "Home";
        case "Found":
            return "Found";
        case "Listen":
            return "Listen";
        case "Account":
            return "Account";
        default:
            return "Home";
    }
}

class BottomTabs extends React.Component<Props> {
    render() {
        return (
            <Tabs.Navigator
                tabBarOptions={{
                    activeTintColor: "#f86442",
                }}>
                <Tabs.Screen name={"Home"} component={Home} />
                <Tabs.Screen name={"Listen"} component={Listen} />
                <Tabs.Screen name={"Found"} component={Found} />
                <Tabs.Screen name={"Account"} component={Account} />
            </Tabs.Navigator>
        );
    }

    componentDidUpdate() {
        const {navigation, route} = this.props;
        navigation.setOptions({
            headerTitle: getHeaderTitle(route),
        });
    }
}

export default BottomTabs;
