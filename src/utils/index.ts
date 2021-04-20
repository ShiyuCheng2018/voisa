import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

// get width percent
function  wp(percentage: number) : number {
    const value  = (percentage * viewportWidth) /100;
    return Math.round(value);
}
// get height percent
function  hp(percentage: number) : number {
    const value  = (percentage * viewportHeight) /100;
    return Math.round(value);
}



export {viewportHeight, viewportWidth, wp, hp}
