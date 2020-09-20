/* tslint:disable */
/* eslint-disable */

import React, {FunctionComponent} from "react";
import {ViewProps} from "react-native";
import {GProps} from "react-native-svg";
import IconStar from "./IconStar";
import IconHome from "./IconHome";
import IconHeart from "./IconHeart";
import IconListen from "./IconListen";
import IconPopular from "./IconPopular";
import IconAccount from "./IconAccount";

export type IconNames =
    | "icon-star"
    | "icon-home"
    | "icon-Heart"
    | "icon-listen"
    | "icon-popular"
    | "icon-account";

interface Props extends GProps, ViewProps {
    name: IconNames;
    size?: number;
    color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({name, ...rest}) => {
    switch (name) {
        case "icon-star":
            return <IconStar key="1" {...rest} />;
        case "icon-home":
            return <IconHome key="2" {...rest} />;
        case "icon-Heart":
            return <IconHeart key="3" {...rest} />;
        case "icon-listen":
            return <IconListen key="4" {...rest} />;
        case "icon-popular":
            return <IconPopular key="5" {...rest} />;
        case "icon-account":
            return <IconAccount key="6" {...rest} />;
    }

    return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
