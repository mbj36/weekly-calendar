import React from "react";
import Navbar from "./Navbar/Navbar";
import { useCalendar } from "../hooks/useCalendar";
import DayCalendar from "./DayCalendar/DayCalendar";
import { Stack } from "@chakra-ui/react";
import { Day } from "./DayCalendar/DayCalendar.types";

function App() {
    const {
        currentWeekDate,
        setCurrentWeekDate,
        timeList,
        days,
    } = useCalendar();

    return (
        <div>
            <Navbar
                currentWeek={currentWeekDate}
                setCurrentWeekDate={setCurrentWeekDate}
            />

            <Stack spacing="1px" direction="row">
                {days &&
                    days.map((day: Day, index: number) => {
                        return (
                            <DayCalendar
                                key={index}
                                day={day}
                                time={timeList}
                            />
                        );
                    })}
            </Stack>
        </div>
    );
}

export default App;
