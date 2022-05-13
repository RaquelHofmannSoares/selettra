class DateProvider {
    addDays(days: number, date?: Date): Date {
        const newDate = date || new Date();

        newDate.setDate(newDate.getDate() + days);

        return newDate;
    }
}
export { DateProvider };
