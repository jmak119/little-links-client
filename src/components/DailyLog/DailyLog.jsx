import React, { useState, useEffect } from "react";
import ToiletTable from "../ToiletTable/ToiletTable";
import ToiletLegend from "../ToiletLegend/ToiletLegend";
import MealLog from "../MealLog/MealLog";
import SleepLog from "../SleepLog/SleepLog";
import { apiUrl } from "../../utils/api";
import axios from "axios";
import { useParams } from 'react-router-dom';
import './DailyLog.scss';


const DailyLog = ({ fullList }) => {

    const [selectedDate, setSelectedDate] = useState('2023-06-28');
    const [nameDetails, setNameDetails] = useState();
    // const {id} = useParams();

    useEffect(() => {
        axios
            .get(`${apiUrl}/dailyLogs/${selectedDate}/1/students`)
            .then((response) => {
                setNameDetails(response.data);
                console.log(response.data.student_name);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    if (!nameDetails) {
        return <span>Loading...</span>;
    }

    const toiletList = fullList.filter(item => item.type === "toilet");
    const mealLog = fullList.filter(item => item.type === "meal");
    const sleepLog = fullList.filter(item => item.type === "sleep");

    return (
        <>
            <div className="log">
                <div className="log__student-container">
                    <img className="log__id-photo" />
                    <div className="log__student-info">
                        <p><span>Name: </span>{`${nameDetails.student_name}`}</p>
                        <p><span>Date: </span>Jan</p>
                        <p><span>Teacher: </span>{`${nameDetails.teachers_name}`}</p>
                    </div>

                    <div className="log__schedule-container">
                        <div className="log__toilet-routine">
                            <ToiletTable toiletList={toiletList} />
                            <ToiletLegend />
                        </div>
                        <div className="log__meal-log">
                            <MealLog mealLog={mealLog} />

                        </div>
                        <div className="log__sleep-log">
                            <SleepLog sleepLog={sleepLog} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DailyLog;