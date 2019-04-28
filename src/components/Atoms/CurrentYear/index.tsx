import * as React from 'react';

export const Currentyear: React.SFC<{}> = (): any => {

   const thisYear: number = new Date().getFullYear();

    return (
        thisYear
    );
};

export default Currentyear;