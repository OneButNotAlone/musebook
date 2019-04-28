export const timeIt = (label: string, fn: () => void) => {
    console.time(label);
    fn();
    console.timeEnd(label);
};
