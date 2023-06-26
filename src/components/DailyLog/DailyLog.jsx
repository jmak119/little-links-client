import React from "react";
import ToiletTable from "../ToiletTable/ToiletTable";
import ToiletLegend from "../ToiletLegend/ToiletLegend";
import MealLog from "../MealLog/MealLog";
import SleepLog from "../SleepLog/SleepLog";
import StudentInfo from "../StudentInfo/StudentInfo";
import './DailyLog.scss';


const DailyLog = ({ fullList }) => {

    const toiletList = fullList.filter(item => item.type === "toilet");
    const mealLog = fullList.filter(item => item.type === "meal");
    const sleepLog = fullList.filter(item => item.type === "sleep");
    const studentInfo = {
        student_name : fullList[0].student_name,
        teacher_name : fullList[0].teacher_name,
        date: fullList[0].date
    }

    return (
        <>
            <div className="daily">
                <div className="daily__student-container">
                    
                    <img className="daily__id-photo" />

                    <div className="daily__student-info">
                        <StudentInfo studentInfo={studentInfo} />
                    </div>

                    <div className="daily__schedule-container">
                        <div className="daily__toilet-routine">
                            <h2 className="daily__section-title">Toileting Routine</h2>
                            <ToiletTable toiletList={toiletList} />
                            <ToiletLegend />
                        </div>

                        <div className="daily__meal-log">
                            <h2 className="daily__section-title">Meals</h2>
                            <MealLog mealLog={mealLog} />
                        </div>

                        <div className="daily__sleep-log">
                            <h2 className="daily__section-title">Sleep Log</h2>
                            <SleepLog sleepLog={sleepLog} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DailyLog;