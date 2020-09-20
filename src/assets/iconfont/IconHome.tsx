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

const IconHome: FunctionComponent<Props> = ({size, color, ...rest}) => {
    return (
        <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
            <Path
                d="M1017.395322 622.848l-452.0448-499.6096c-14.0288-15.5136-32.9728-24.064-53.3504-24.064 0 0 0 0 0 0-20.3264 0-39.2704 8.5504-53.3504 24.064l-452.0448 499.6096c-9.472 10.496-8.6528 26.6752 1.792 36.1472 4.9152 4.4544 11.0592 6.6048 17.152 6.6048 6.9632 0 13.9264-2.816 18.9952-8.448l109.0048-120.4736 0 410.5216c0 42.3424 34.4576 76.8 76.8 76.8l563.2 0c42.3424 0 76.8-34.4576 76.8-76.8l0-410.5216 109.0048 120.4736c9.472 10.496 25.6512 11.3152 36.1472 1.792s11.3152-25.6512 1.792-36.1472zM614.400122 972.8l-204.8 0 0-230.4c0-14.1312 11.4688-25.6 25.6-25.6l153.6 0c14.1312 0 25.6 11.4688 25.6 25.6l0 230.4zM819.200122 947.2c0 14.1312-11.4688 25.6-25.6 25.6l-128 0 0-230.4c0-42.3424-34.4576-76.8-76.8-76.8l-153.6 0c-42.3424 0-76.8 34.4576-76.8 76.8l0 230.4-128 0c-14.1312 0-25.6-11.4688-25.6-25.6l0-467.0976 291.84-322.56c4.1984-4.6592 9.6768-7.2192 15.36-7.2192s11.1616 2.56 15.36 7.2192l291.84 322.56 0 467.0976z"
                fill={getIconColor(color, 0, "#333333")}
            />
        </Svg>
    );
};

IconHome.defaultProps = {
    size: 18,
};

export default React.memo ? React.memo(IconHome) : IconHome;
