import React, { useState, useEffect } from "react";
import MyCalendar from '../../components/Calendar/Calendar';
import DailyLog from '../../components/DailyLog/DailyLog';

import './HomePage.scss';
import { apiUrl } from "../../utils/api";
import axios from "axios";

import { useParams } from 'react-router-dom';

const Homepage = () => {

    const [selectedDate, setSelectedDate] = useState('2023-06-28');

    const [fullList, setFullList] = useState();

    useEffect(() => {
        axios
            .get(`${apiUrl}/dailyLogs/${selectedDate}`)
            .then((response) => {
                setFullList(response.data);
                
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    if (!fullList) {
        return <span>Loading...</span>;
    }
    
    // setDailyStudentDetails(fullList.filter(item => item.student_id===1 && item.date === selectedDate));

    const toiletList= fullList.filter(item => item.type ==="toilet");
    // const mealLog = fullList.filter(item => item.type === "meal");
    // const sleepLog = fullList.filter(item => item.type ==="sleep");
    

    // console.log(sleepLog)

    return (
        <>
            <div className="home__body">
                <div>
                    <MyCalendar />
                </div>
                <div className="home__log-container">
                    <DailyLog 
                        // fullList = {fullList}
                        toiletList={toiletList}
                        // mealLog={mealLog}
                        // sleepLog = {sleepLog}
                         />
                    
                </div>
            </div>
        </>
    )
}

export default Homepage;