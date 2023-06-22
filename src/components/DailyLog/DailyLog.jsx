import React, { useState } from "react";
import ToiletTable from "../ToiletTable/ToiletTable";
import ToiletLegend from "../ToiletLegend/ToiletLegend";
import MealLog from "../MealLog/MealLog";
import SleepLog from "../SleepLog/SleepLog";

import './DailyLog.scss';

const DailyLog = (toiletList, mealLog, sleepLog) => {

    return (
        <>
            <div className="log">
                <div className="log__student-container">
                    <img className="log__id-photo" />
                    <div className="log__student-info">
                        <p><span>Name: </span>jhjg</p>
                        <p><span>Date: </span>Jan</p>
                        <p><span>Teacher: </span>Mr. Jonathan</p>
                    </div>

                    <div className="log__schedule-container">
                        <div className="log__toilet-routine">
                            <ToiletTable toiletList={toiletList} />
                            <ToiletLegend />
                        </div>
                        <div className="log__meal-log">
                            {/* <MealLog mealLog = {mealLog} /> */}

                        </div>
                        <div className="log__sleep-log">
                            {/* <SleepLog sleepLog={sleepLog} /> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DailyLog;