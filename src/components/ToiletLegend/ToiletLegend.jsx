import React from "react";
import './ToiletLegend.scss';

export default function ToiletLegend () {
    return (
        <>
            <div className="legend">
                <h4 className="legend__title">LEGEND: </h4>
                <p className="legend__title">W = WET</p>
                <p className="legend__title">D = DRY</p>
                <p className="legend__title">TT = TRIED THE TOILET</p>
                <p className="legend__title">UT = USED THE TOILET</p>
                <p className="legend__title">BM = BOWEL MOVEMENT</p>
                <p className="legend__title">ACC = ACCIDENT</p>
            </div>
        </>
    )
}