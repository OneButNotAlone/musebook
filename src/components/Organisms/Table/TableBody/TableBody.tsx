import * as React from 'react';
import styled from 'styled-components';
import { Hidden } from 'reakit';
import Arrow from '../../../Atoms/Arrow';

import AnimateHeight from 'react-animate-height';

const HiddenDataFlex = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    padding: 0px 0px 30px 0px;
    cursor: default;
`;

interface TableBodyProps {
    rowData: any;
    startIndex?: number;
    endIndex?: number;
    collapsibleRows: boolean;
    delimiter?: any;
    renderCollapsedData?: (index: number) => React.ReactNode;
    collapsedSpan?: number;
}

export class TableBody extends React.PureComponent<TableBodyProps, {}> {
    constructor(props: TableBodyProps) {
        super(props);
    }

    render() {
        const {
            rowData,
            startIndex,
            endIndex,
            collapsibleRows,
            delimiter,
            renderCollapsedData,
            collapsedSpan
        } = this.props;

        return (
            <tbody>
                {rowData.map((value: any, index: number) => (
                    <Hidden.Container key={index}>
                        {({ visible, toggle }) => (
                            <>
                                <tr
                                    onClick={toggle}
                                    style={
                                        collapsibleRows
                                            ? {
                                                  cursor: 'pointer'
                                              }
                                            : {
                                                  cursor: 'default',
                                                  backgroundColor: 'white'
                                              }
                                    }
                                    key={index}>
                                    {Object.values(value).map((data: any, index: number) => (
                                        <td key={index}>
                                            {collapsibleRows && index === 0 && (
                                                <Arrow
                                                    angle={visible ? 0 : 270}
                                                    style={{
                                                        marginRight: '5px',
                                                        marginTop: '10px',
                                                        float: 'left'
                                                    }}
                                                />
                                            )}
                                            {delimiter
                                                ? data
                                                      .split(delimiter)
                                                      .map((item: any, index: number) => (
                                                          <div key={index}>{item}</div>
                                                      ))
                                                : data}
                                        </td>
                                    ))}
                                </tr>
                                {collapsibleRows && (
                                    <tr>
                                        <td
                                            style={
                                                !visible
                                                    ? {
                                                          borderBottom: '0px',
                                                          padding: '0 20px 0 20px',
                                                          transition: 'all ease 500ms'
                                                      }
                                                    : {
                                                          backgroundColor: '#FFFFFF'
                                                      }
                                            }
                                            colSpan={collapsedSpan}>
                                            <AnimateHeight
                                                duration={500}
                                                height={!visible ? 0 : 'auto'}>
                                                <HiddenDataFlex>
                                                    {renderCollapsedData(index)}
                                                </HiddenDataFlex>
                                            </AnimateHeight>
                                        </td>
                                    </tr>
                                )}
                            </>
                        )}
                    </Hidden.Container>
                )).slice(startIndex, endIndex)}
            </tbody>
        );
    }
}
export default TableBody;
