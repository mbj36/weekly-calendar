import React from "react";
import { Flex, Heading, Button, Stack } from "@chakra-ui/react";
import { format, addWeeks } from "date-fns";

function Navbar({
    currentWeek,
    setCurrentWeekDate,
}: {
    currentWeek: Date;
    setCurrentWeekDate: (date: Date) => void;
}) {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="gray.800"
            color="white"
        >
            <Stack direction="row" spacing="10px">
                <Heading as="h1" size="lg">
                    Weekly Calendar
                </Heading>
                <Button colorScheme="teal">
                    {format(new Date(), "MMMM yyyy")}
                </Button>
            </Stack>

            <Stack direction="row">
                <Button
                    colorScheme="teal"
                    onClick={() => {
                        setCurrentWeekDate(addWeeks(currentWeek, -1));
                    }}
                >
                    Previous
                </Button>
                <Button
                    colorScheme="teal"
                    variant="solid"
                    onClick={() => {
                        setCurrentWeekDate(addWeeks(currentWeek, 1));
                    }}
                >
                    Next
                </Button>
            </Stack>
        </Flex>
    );
}

export default Navbar;
