import React from 'react'
import { Slider} from "antd";

function SalarySlider() {
    return (
        <Slider range defaultValue={[600, 2500]} disabled={false}/>
    )
}

export default SalarySlider;
