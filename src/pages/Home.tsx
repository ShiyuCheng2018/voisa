import React from "react";
import {Button, Text, View} from "react-native";
import {RootStackNavigation} from "@/navigator/index";

interface Props {
    navigation: RootStackNavigation;
}

class Home extends React.Component<Props> {
    onPress = () => {
        const {navigation} = this.props;
        navigation.navigate("Detail", {id: 100});
    };

    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button title={"detail"} onPress={this.onPress} />
            </View>
        );
    }
}

export default Home;
