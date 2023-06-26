import React, { useState, useEffect } from "react";
import MyCalendar from '../../components/Calendar/Calendar';
import DailyLog from '../../components/DailyLog/DailyLog';

import './LogPage.scss';
import { apiUrl } from "../../utils/api";
import axios from "axios";

import { useParams } from 'react-router-dom';

const LogPage = () => {

    const [selectedDate, setSelectedDate] = useState('2023-06-28');

    const [fullList, setFullList] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`${apiUrl}/students/${id}`)
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

    return (
        <>
            <div className="log">
                <div className="log__calendar">
                    <MyCalendar />
                </div>
                <div className="log__container">
                    <h2 className="log__title">Daily Log</h2>
                    <DailyLog
                        fullList={fullList}
                    />
                </div>
            </div>
        </>
    )
}

export default LogPage;