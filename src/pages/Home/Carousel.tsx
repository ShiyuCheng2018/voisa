import React, {Component} from "react";
import SnapCarousel from "react-native-snap-carousel";
import {viewportWidth, wp, hp} from "@/utils/index";
import {Image, StyleSheet} from "react-native";

const data = [
    'https://st3.depositphotos.com/1340834/15266/i/1600/depositphotos_152666234-stock-photo-view-from-cortina-d-ampezzo.jpg',
    'https://st.depositphotos.com/1062486/3112/i/950/depositphotos_31124793-stock-photo-amazing-albanian-alps.jpg',
    'https://st3.depositphotos.com/1000633/16881/i/1600/depositphotos_168817684-stock-photo-high-mountain-in-alps.jpg',
    'https://st.depositphotos.com/1340834/1226/i/950/depositphotos_12262398-stock-photo-passo-guai-in-dolomites-italy.jpg',
    'https://st.depositphotos.com/1340834/1226/i/950/depositphotos_12262391-stock-photo-beautiful-mountain-view-in-pirin.jpg',
    'https://static3.depositphotos.com/1005730/225/i/950/depositphotos_2254051-stock-photo-road-in-alps.jpg'
];

const sliderWidth = viewportWidth;
const slideHeight = hp(26);
const itemWidth = wp(90) + wp(2) * 2;

class Carousel extends Component<any, any>{

    renderItem = ({item}: {item: string})  =>{
        return (
            <Image source={{uri: item}} style={styles.image}/>
        )
    }

    render() {

        return <SnapCarousel data={data} renderItem={this.renderItem} sliderWidth={sliderWidth} itemWidth={itemWidth}/>
    }
}

const styles = StyleSheet.create({
    image:  {
        width: itemWidth,
        height: slideHeight
    }
})

export default Carousel;

