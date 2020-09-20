/* tslint:disable */
/* eslint-disable */

import React, {FunctionComponent} from "react";
import {ViewProps} from "react-native";
import {Svg, GProps, Path} from "react-native-svg";
import {getIconColor} from "./helper";

interface Props extends GProps, ViewProps {
    size?: number;
    color?: string | string[];
}

const IconAccount: FunctionComponent<Props> = ({size, color, ...rest}) => {
    return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
            <Path
                d="M793.6 316.991c0-163.287-131.807-295.658-294.4-295.658S204.8 153.704 204.8 316.991c0 163.288 131.807 295.659 294.4 295.659S793.6 480.279 793.6 316.99z m-537.6 0c0-134.89 108.884-244.239 243.2-244.239 134.316 0 243.2 109.35 243.2 244.24 0 134.89-108.884 244.239-243.2 244.239-134.316 0-243.2-109.35-243.2-244.24z"
                fill={getIconColor(color, 0, "#333333")}
            />
            <Path
                d="M0 998.29V1024h1024v-25.71c0-230.827-236.91-437.06-512-437.06-16.552 0-33.01 0.67-49.34 2.003-14.092 1.149 22.596 13.553 23.74 27.706 14.95-1.22 10.431 21.71 25.6 21.71 248.31 0 460.8 184.975 460.8 385.642l25.6-25.71H25.6l25.6 25.71c0-136.534 85.814-261.346 224.064-330.852 12.642-6.356 17.76-21.802 11.431-34.498-6.329-12.697-21.709-17.837-34.351-11.48C97.582 699.267 0 841.195 0 998.29z"
                fill={getIconColor(color, 1, "#333333")}
            />
        </Svg>
    );
};

IconAccount.defaultProps = {
    size: 18,
};

export default React.memo ? React.memo(IconAccount) : IconAccount;
