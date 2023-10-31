import React, {useContext, useState} from 'react';
import '../../App.css';

import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {useData} from "../../utils/DataContext";
import axios from 'axios';


const Header = ({ activePage }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const { setData } = useData();

    const fetchData = async () => {
        try {
            const startISO = startDate.toISOString();
            const endISO = endDate.toISOString();

            const url = `http://127.0.0.1:8000/data/?date_start=${startISO}&date_end=${endISO}`;

            const response = await fetch(url);
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };



    return (
        <div className="header">
            <div>
                <h1>{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h1>
                <div className="date-picker-container">
                    <DateRangePicker
                        startDate={startDate}
                        startDateId="start_date_id"
                        endDate={endDate}
                        endDateId="end_date_id"
                        onDatesChange={({ startDate, endDate }) => {
                            setStartDate(startDate);
                            setEndDate(endDate);
                        }}
                        focusedInput={focusedInput}
                        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                        startDatePlaceholderText="Start Date"
                        endDatePlaceholderText="End Date"
                        displayFormat="YYYY-MM-DD"
                        isOutsideRange={() => false}
                    />
                    <button type="button" onClick={fetchData}>Обновить</button>
                </div>
            </div>
        </div>
    );
}

export default Header;