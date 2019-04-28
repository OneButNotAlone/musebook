import * as React from 'react';

// TODO: Reuse header props from other components
interface TableHeadProps {
    headers: Array<{
        name: string;
        url?: string | undefined;
        icon?: React.ReactNode;
    }>;
}

export class TableHead extends React.PureComponent<TableHeadProps, {}> {
    constructor(props: TableHeadProps) {
        super(props);
    }

    render() {
        const { headers } = this.props;
        return (
            // Add sorting to table
            <thead>
                <tr>
                    {headers.map((header: any, index: number) => (
                        <th key={index}>
                            {header.name}{' '}
                            {header.url &&
                                header.icon && (
                                    <span
                                        onClick={() => {
                                            window.open(header.url);
                                        }}>
                                        {header.icon}
                                    </span>
                                )}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}
export default TableHead;
