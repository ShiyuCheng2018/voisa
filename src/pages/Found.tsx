import React from "react";
import {Button, Text, View} from "react-native";
import {RootStackNavigation} from "@/navigator/index";

interface Props {
    navigation: RootStackNavigation;
}

class Found extends React.Component<Props> {
    onPress = () => {
        const {navigation} = this.props;
        navigation.navigate("Detail", {id: 100});
    };

    render() {
        return (
            <View>
                <Text>Found</Text>
                <Button title={"detail"} onPress={this.onPress} />
            </View>
        );
    }
}

export default Found;
