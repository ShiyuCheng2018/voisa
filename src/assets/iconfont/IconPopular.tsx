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

const IconPopular: FunctionComponent<Props> = ({size, color, ...rest}) => {
    return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
            <Path
                d="M554.666667 768V256h128l-170.666667-170.666667-170.666667 170.666667h128v512z"
                fill={getIconColor(color, 0, "#333333")}
            />
            <Path
                d="M298.666667 341.333333h85.333333v426.666667H298.666667z m341.333333 170.666667h85.333333v256h-85.333333z m170.666667 85.333333h85.333333v170.666667h-85.333333zM128 640h85.333333v128H128z m0 213.333333h768v85.333334H128z"
                fill={getIconColor(color, 1, "#333333")}
            />
        </Svg>
    );
};

IconPopular.defaultProps = {
    size: 18,
};

export default React.memo ? React.memo(IconPopular) : IconPopular;
