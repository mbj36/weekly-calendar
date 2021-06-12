import {
    startOfISOWeek,
    addMinutes,
    format,
    formatISO,
    addHours,
    startOfDay,
    addDays,
} from "date-fns";
import { useState } from "react";
import { events } from "../utils/utils";

export const useCalendar = () => {
    const [currentWeekDate, setCurrentWeekDate] = useState(
        startOfISOWeek(new Date())
    );
    const hours = new Date(startOfDay(new Date()));

    const currentDate = new Date().toDateString();
    const addMinutesToCurrentTimeStamp = (
        timestamp: number,
        minutes: number
    ) => {
        return format(addMinutes(new Date(timestamp), minutes), "p");
    };
    const time = [];
    for (let i = 0; i < 24; i++) {
        time.push(formatISO(addHours(hours, i)));
    }

    const days = [];

    for (let i = 0; i < 7; i++) {
        days.push({
            day: format(addDays(currentWeekDate, i), "dd/MM"),
            dayName: format(addDays(currentWeekDate, i), "EEEEEE"),
            date: format(addDays(currentWeekDate, i), "eee LLL dd yyyy"),
            events: events.filter(event => {
                const date = format(
                    addDays(currentWeekDate, i),
                    "eee LLL dd yyyy"
                );

                if (
                    formatISO(new Date(event.fromTs).setHours(0, 0, 0, 0)) ===
                    formatISO(new Date(date))
                ) {
                    return event;
                }
            }),
        });
    }

    return {
        currentWeekDate,
        setCurrentWeekDate,
        currentDate,
        addMinutesToCurrentTimeStamp,
        timeList: time,
        days,
    };
};
