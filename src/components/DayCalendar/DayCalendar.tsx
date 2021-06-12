import React from "react";
import { Box, Stack, Heading, Center, Text, Divider } from "@chakra-ui/react";
import { useCalendar } from "../../hooks/useCalendar";
import { getHours, format } from "date-fns";
import { Day } from "./DayCalendar.types";

function DayCalendar({ day, time }: { day: Day; time: Array<string> }) {
    const { currentDate, addMinutesToCurrentTimeStamp } = useCalendar();
    return (
        <Box
            h="90vh"
            boxShadow="sm"
            width="100%"
            bg={currentDate === day.date ? "yellow.100" : ""}
        >
            <Stack direction="column" marginTop="10px" spacing="10px">
                <Center>
                    <Heading>{day.dayName}</Heading>
                </Center>
                <Center>
                    <Text>{day.day}</Text>
                </Center>

                <Divider colorScheme="blue" />
            </Stack>

            <Stack direction="column">
                {time.map((t: string) => {
                    const slot =
                        day &&
                        day?.events?.filter(event => {
                            const time = getHours(event.fromTs);

                            if (time === getHours(new Date(t))) {
                                return event;
                            }
                        });

                    return (
                        <p className="time" key={t}>
                            {slot?.map(s => {
                                return (
                                    <Box
                                        key={s.fromTs}
                                        bg="teal.100"
                                        boxShadow="lg"
                                    >
                                        <Stack direction="column">
                                            <Text padding="5px">{s.desc}</Text>

                                            <Text padding="5px">
                                                {format(s.fromTs, "p")} -{" "}
                                                {addMinutesToCurrentTimeStamp(
                                                    s.fromTs,
                                                    s.dur / 60
                                                )}
                                            </Text>
                                        </Stack>
                                    </Box>
                                );
                            })}
                        </p>
                    );
                })}
            </Stack>
        </Box>
    );
}

export default DayCalendar;
