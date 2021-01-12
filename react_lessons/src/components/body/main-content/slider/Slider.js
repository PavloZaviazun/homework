import slider1 from "../../../../images/sliders/slider1.jpg";
import slider2 from "../../../../images/sliders/slider2.jpg";
import slider3 from "../../../../images/sliders/slider3.jpg";
import slider4 from "../../../../images/sliders/slider4.jpg";
import slider5 from "../../../../images/sliders/slider5.jpg";
import slider6 from "../../../../images/sliders/slider6.jpg";
import slider7 from "../../../../images/sliders/slider7.jpg";
import slider8 from "../../../../images/sliders/slider8.jpg";
import slider9 from "../../../../images/sliders/slider9.jpg";
import sliderArrowRight from "../../../../images/sliderArrowRight.png";
import sliderArrowLeft from "../../../../images/sliderArrowLeft.png";
import {Link} from 'react-router-dom';

import {useEffect, useState} from 'react';

export const Slider = () => {

    const [slider, setSlider] = useState(0);
    const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9];
    let timeout;

    useEffect(() => {
        timeout = setTimeout(() => {
            if(slider < 8) return setSlider(slider + 1);
            return setSlider( 0);
        }, 5000)
    });

    return (
        <div className={"slider"}>
            <div><img className="slide-show" src={images[slider]} alt={"slider"}/></div>
            <div className={"vse-akcii"}>
                <div className={"div-vse-akcii"}>
                    <Link to={""}>Все акции</Link> {images.length}
                </div>
            </div>
            <div className={"div-sliderArrow"}>
                <div>
                    <img src={sliderArrowLeft} onClick={() => {
                        clearTimeout(timeout);
                        if(slider !== 0) return setSlider(slider - 1);
                        return setSlider (8)
                    }} className={"sliderArrow"} alt={"slider Arrow"}/>
                </div>
                <div>
                    <img src={sliderArrowRight} onClick={() => {
                        clearTimeout(timeout);
                        if(slider < 8) return setSlider(slider + 1);
                        return setSlider(0);
                    }}className={"sliderArrow"} alt={"slider Arrow"}/>
                </div>
            </div>
        </div>
    )


}
