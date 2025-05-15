import { format } from "date-fns";

export const dateFormatter = (date: number | Date, expectedFormat: string) => {
    return format(date, expectedFormat);
};
