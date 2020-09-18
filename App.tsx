/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {Text} from "react-native";
import Config from "react-native-config";

declare const global: {HermesInternal: null | {}};

const App = () => {
    return (
        <>
            <Text>HELLO</Text>
            <Text>{Config.API_URL}</Text>
        </>
    );
};

export default App;
