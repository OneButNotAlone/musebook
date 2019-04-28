import { useState, useEffect } from 'react';
/**
 * Custom React hook to isolate state and features specific to the Pagination component.
 * We are exporting this as a [constate](https://github.com/diegohaz/constate) container
 * Use with the useContext react hook
 */
export const usePaginator = ({ length }: { length: number }) => {
    const [dataLength, setDataLength] = useState(length);
    const [endIndex, setEndIndex] = useState();
    const [rowsToShow, setRowsToShow] = useState<number | string>(10);
    const [selected] = useState<number | string>();
    const [startIndex, setStartIndex] = useState(0);

    const isNextPgAllowed = () => {
        if (endIndex !== dataLength && rowsToShow !== 'all') {
            return true;
        } else {
            return false;
        }
    }

    const isPrevPgAllowed = () => {
        if (startIndex !== 0 && rowsToShow !== 'all') {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        setEndIndex(dataLength > 10 ? 10 : dataLength);
    }, [dataLength])

    const setRowAmount = (selected: any) => {
        const endIndex = startIndex + Number(selected);
        const maxResults = dataLength;

        if (dataLength <= selected) {
            setRowsToShow(Number(selected));
            setStartIndex(0);
            setEndIndex(dataLength);
        }

        if (selected === 'all') {
            setRowsToShow('all');
            setStartIndex(0);
            setEndIndex(maxResults);
        } else if (endIndex <= maxResults) {
            setRowsToShow(Number(selected));
            setEndIndex(Number(endIndex));
        } else {
            setRowsToShow(Number(selected));
            setEndIndex(maxResults);
        }
    }

    const nextPage = () => {
        if (isNextPgAllowed) {

            const newEndIndex = endIndex + rowsToShow;

            if (newEndIndex > dataLength) {
                setStartIndex(newEndIndex - Number(rowsToShow));
                setEndIndex(dataLength);
            } else {
                setStartIndex(startIndex + Number(rowsToShow));
                setEndIndex(newEndIndex);
            }
        }
    }

    const prevPage = () => {
        if (isPrevPgAllowed) {

            const newStartIndex = startIndex - Number(rowsToShow);

            if (newStartIndex < 0) {
                setStartIndex(0);
                setEndIndex(rowsToShow);
            } else {
                setStartIndex(newStartIndex);
                setEndIndex(newStartIndex + Number(rowsToShow));
            }
        }
    }

    return {
        dataLength,
        endIndex,
        nextPage,
        setRowAmount,
        prevPage,
        rowsToShow,
        selected,
        setDataLength,
        startIndex,
        isNextPgAllowed,
        isPrevPgAllowed
    };

};

export default usePaginator;