import React from "react";
import {Button, Text, View} from "react-native";
import {RootStackNavigation} from "@/navigator/index";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "@/models/index";

const mapStateToProps = ({home}: RootState) =>({
    num: home.num
});

const connector = connect(mapStateToProps);

type MadeState = ConnectedProps<typeof connector>;

interface Props extends MadeState{
    navigation: RootStackNavigation;
}

class Home extends React.Component<Props> {
    onPress = () => {
        const {navigation} = this.props;
        navigation.navigate("Detail", {id: 100});
    };

    render() {
        const {num} = this.props

        return (
            <View>
                <Text>Home {num}</Text>
                <Button title={"+"} onPress={()=>{
                    const {dispatch} = this.props;
                    dispatch({
                        type: "home/add",
                        payload:{
                            num: 10
                        }
                    })
                }}/>
                <Button title={"detail"} onPress={this.onPress} />
            </View>
        );
    }
}

export default connector(Home);
