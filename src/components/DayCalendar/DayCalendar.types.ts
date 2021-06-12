export type Day = {
    day: string;
    dayName: string;
    date: string;
    events: Array<EventType> | null;
};

export type EventType = {
    fromTs: number;
    dur: number;
    desc: string;
};
