import React, {Component} from "react";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';

const Tab = createMaterialTopTabNavigator();

class HomeTabs extends Component<any, any>{
    render() {
        return (
            <Tab.Navigator
                lazy
                tabBarOptions={{
                    scrollEnabled: true,
                    tabStyle:{
                        width: 130
                    },
                    indicatorStyle:{
                        height: 4,
                        width: 20,
                        marginLeft: 30,
                        borderRadius: 2,
                        backgroundColor: '#f86442',
                    },
                    activeTintColor: '#f86442',
                    inactiveTintColor: '#333'
                }}
            >
                <Tab.Screen name={'Home 1'} component={Home} options={{
                    tabBarLabel: 'recommend'
                }}/>
                <Tab.Screen name={'Home 2'} component={Home} />
                <Tab.Screen name={'Home 3'} component={Home} />
            </Tab.Navigator>
        )
    }
}

export default HomeTabs;
