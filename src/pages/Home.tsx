import React from "react";
import {Button, Text, View} from "react-native";
import {RootStackNavigation} from "@/navigator/index";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "@/models/index";

const mapStateToProps = ({home, loading}: RootState) => ({
    num: home.num,
    loading: loading.effects["home/asyncAdd"],
});

const connector = connect(mapStateToProps);

type MadeState = ConnectedProps<typeof connector>;

interface Props extends MadeState {
    navigation: RootStackNavigation;
}

class Home extends React.Component<Props> {
    onPress = () => {
        const {navigation} = this.props;
        navigation.navigate("Detail", {id: 100});
    };

    render() {
        const {num, loading} = this.props;

        return (
            <View>
                <Text>Home {num}</Text>
                {loading ? <Text>Loading</Text> : <Text> </Text>}
                <Button
                    title={"+"}
                    onPress={() => {
                        const {dispatch} = this.props;
                        dispatch({
                            type: "home/add",
                            payload: {
                                num: 10,
                            },
                        });
                    }}
                />
                <Button
                    title={"async +"}
                    onPress={() => {
                        const {dispatch} = this.props;
                        dispatch({
                            type: "home/asyncAdd",
                            payload: {
                                num: 2,
                            },
                        });
                    }}
                />
                <Button title={"detail"} onPress={this.onPress} />
            </View>
        );
    }
}

export default connector(Home);
