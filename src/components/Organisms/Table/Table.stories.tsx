import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Table from './Table';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import MoreInfo from '../../Images/moreInfo';

const StorybookPadding = styled.div`
    max-width: 70vw;
    margin: 0 auto;
    flex-grow: 1;
    padding: 2em;
`;

const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 100px;
    margin-top: 0px;
    width: 300px;
`;

const Data = styled.div``;

const Header = styled.div`
    text-align: left;
    color: #666666;
    height: 25px;
    width: auto;
    font-family: 'Bogle', sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    margin-bottom: 10px;
`;

const Body = styled.div`
    text-align: left;
    color: #555555;
    font-family: 'Bogle' sans-serif;
    font-size: 18px;
    line-height: 25px;
`;

const Line = styled.div`
    box-sizing: border-box;
    height: 3px;
    width: 300px;
    border: 1px solid #cccccc;
    border-bottom: 0px;
    border-right: 0px;
    border-left: 0px;
`;

const ListWrapper = styled.ul`
    padding-inline-start: 20px;

    li {
        padding-bottom: 4px;
    }
`;

enum HEADER {
    BLAH,
    DOOP
}

// User define Header names as keys containing object... e.g.  yes_or_nah  (We can rip out the underscores and format during render)
//   Also, include filter fn for the column

// Iterate over the array and create the object types for each row_data

export const rowData = [
    {
        yes_no: 'No',
        numbers: '1,2,3,4',
        telegraf: 'No',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '2,3,4,5',
        telegraf: 'yes',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '1,2,3,4',
        telegraf: 'No',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '2,3,4,5',
        telegraf: 'yes',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '1,2,3,4',
        telegraf: 'No',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '2,3,4,5',
        telegraf: 'yes',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '1,2,3,4',
        telegraf: 'No',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '2,3,4,5',
        telegraf: 'yes',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '1,2,3,4',
        telegraf: 'No',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '2,3,4,5',
        telegraf: 'yes',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '1,2,3,4',
        telegraf: 'No',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '2,3,4,5',
        telegraf: 'yes',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '1,2,3,4',
        telegraf: 'No',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '2,3,4,5',
        telegraf: 'yes',
        names: 'name1, name2, name3, name4',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    }
];

storiesOf('Table', module)
    .addDecorator((storyFn) => <StorybookPadding>{storyFn()}</StorybookPadding>)
    .add('with pagination', () => (
            <Table
                rowData={rowData}
                paginated={true}
                delimiter=","
                headers={[
                    // TODO: Fix these type definitions
                    // @ts-ignore
                    { name: 'yes_or_nah' },
                    // @ts-ignore
                    { name: 'Numbers' },
                    // @ts-ignore
                    { name: 'Telegraf' },
                    // @ts-ignore
                    { name: 'Names' },
                    // @ts-ignore
                    { name: 'Computers' },
                    // @ts-ignore
                    { name: 'Some Date' },
                    // @ts-ignore
                    { name: 'DR' },
                    // @ts-ignore
                    { name: 'Auto Replace' }
                ]}
            />
    ))
    .add('with pagination & collapsible rows', () => (
        <Table
            rowData={rowData}
            paginated={true}
            delimiter=","
            collapsibleRows={true}
            collapsedSpan={8}
            renderCollapsedData={(index: number) => (
                <>
                    <DataWrapper>
                        <Data>
                            <Header>
                                Left Side Data
                                <Line />
                            </Header>
                            <Body>
                                <div>
                                    <b>first line:</b> {rowData[index].yes_no}
                                </div>
                                <div>
                                    <b>second line:</b> {rowData[index].telegraf}
                                </div>
                                <div>
                                    <b>third line:</b> <span>{rowData[index].dr}</span>
                                </div>
                                <div>
                                    <b>fourth line:</b> <span>{rowData[index].auto_replace}</span>
                                </div>
                                <br />
                            </Body>
                        </Data>
                    </DataWrapper>
                    <DataWrapper>
                        <Data>
                            <Header>
                                <b>
                                    Right Side Data
                                    <Line />
                                </b>
                            </Header>
                            <Body>
                                <div
                                    children={rowData[index].names.split(',').map((data: any) =>
                                        data === 'None' ? (
                                            <span>{data}</span>
                                        ) : (
                                                <ListWrapper>
                                                    <li>{data}</li>
                                                </ListWrapper>
                                            )
                                    )}
                                />
                            </Body>
                            <br />
                        </Data>
                    </DataWrapper>
                </>
            )}
            headers={[
                // TODO: Fix these type definitions
                // @ts-ignore
                { name: 'Yes or Nah' },
                // @ts-ignore
                { name: 'Numbers' },
                // @ts-ignore
                { name: 'Telegraf' },
                // @ts-ignore
                { name: 'Names' },
                // @ts-ignore
                { name: 'Computers' },
                // @ts-ignore
                { name: 'Some Date' },
                // @ts-ignore
                { name: 'DR' },
                // @ts-ignore
                { name: 'Auto Replace' }
            ]}

        />
    ))
    .add('basic table', () => (
        <Table>
            <TableHead
                headers={[
                    { name: 'Yes or No' },
                    { name: 'Numbers' },
                    { name: 'Telegraf' },
                    { name: 'Names' },
                    { name: 'Computers' },
                    { name: 'Some Date' },
                    { name: 'DR' },
                    { name: 'Auto Replace' }
                ]}
            />
            <TableBody rowData={rowData} collapsibleRows={false} delimiter="," />
        </Table>
    ))
    .add('basic table w/ collapsibe rows', () => (
        <Table>
            <TableHead
                headers={[
                    { name: 'Yes or No' },
                    { name: 'Numbers' },
                    { name: 'Telegraf' },
                    { name: 'Names' },
                    { name: 'Computers' },
                    { name: 'Some Date' },
                    { name: 'DR' },
                    { name: 'Auto Replace' }
                ]}
            />
            <TableBody
                rowData={rowData}
                collapsibleRows={true}
                delimiter=","
                collapsedSpan={8}
                renderCollapsedData={(index) => (
                    <>
                        <DataWrapper>
                            <Data>
                                <Header>
                                    Left Side Data
                                    <Line />
                                </Header>
                                <Body>
                                    <div>
                                        <b>first line:</b> {rowData[index].yes_no}
                                    </div>
                                    <div>
                                        <b>second line:</b> {rowData[index].telegraf}
                                    </div>
                                    <div>
                                        <b>third line:</b> <span>{rowData[index].dr}</span>
                                    </div>
                                    <div>
                                        <b>fourth line:</b>{' '}
                                        <span>{rowData[index].auto_replace}</span>
                                    </div>
                                    <br />
                                </Body>
                            </Data>
                        </DataWrapper>
                        <DataWrapper>
                            <Data>
                                <Header>
                                    <b>
                                        Right Side Data
                                        <Line />
                                    </b>
                                </Header>
                                <Body>
                                    <div
                                        children={rowData[index].names.split(',').map((data: any) =>
                                            data === 'None' ? (
                                                <span>{data}</span>
                                            ) : (
                                                    <ListWrapper>
                                                        <li>{data}</li>
                                                    </ListWrapper>
                                                )
                                        )}
                                    />
                                </Body>
                                <br />
                            </Data>
                        </DataWrapper>
                    </>
                )}
            />
        </Table>
    ))
    .add('table head', () => (
        <Table>
            <TableHead
                headers={[
                    { name: 'Yes or No' },
                    { name: 'Numbers' },
                    { name: 'Telegraf' },
                    { name: 'Names' },
                    { name: 'Computers' },
                    { name: 'Some Date' },
                    { name: 'DR' },
                    { name: 'Auto Replace' }
                ]}
            />
        </Table>
    ))
    .add('table head w/ clickable icons', () => (
        <Table>
            <TableHead
                headers={[
                    { name: 'Yes or No' },
                    { name: 'Numbers' },
                    { name: 'Telegraf' },
                    { name: 'Names' },
                    { name: 'Computers' },
                    { name: 'Some Date' },
                    {
                        icon: <MoreInfo />,
                        name: 'DR',
                        url:
                            'https://confluence.walmart.com/pages/viewpage.action?spaceKey=PGPPAAS&title=Tech-Debt+Definitions'
                    },
                    { name: 'Auto Replace' }
                ]}
            />
        </Table>
    ))
    .add('table body', () => (
        <Table>
            <TableBody rowData={rowData} collapsibleRows={false} delimiter="," />
        </Table>
    ))
    .add('table body w/ collapsbile rows', () => (
        <Table>
            <TableBody
                rowData={rowData}
                collapsibleRows={true}
                delimiter=","
                collapsedSpan={8}
                renderCollapsedData={(index) => (
                    <>
                        <DataWrapper>
                            <Data>
                                <Header>
                                    Left Side Data
                                    <Line />
                                </Header>
                                <Body>
                                    <div>
                                        <b>first line:</b> {rowData[index].yes_no}
                                    </div>
                                    <div>
                                        <b>second line:</b> {rowData[index].telegraf}
                                    </div>
                                    <div>
                                        <b>third line:</b> <span>{rowData[index].dr}</span>
                                    </div>
                                    <div>
                                        <b>fourth line:</b>{' '}
                                        <span>{rowData[index].auto_replace}</span>
                                    </div>
                                    <br />
                                </Body>
                            </Data>
                        </DataWrapper>
                        <DataWrapper>
                            <Data>
                                <Header>
                                    <b>
                                        Right Side Data
                                        <Line />
                                    </b>
                                </Header>
                                <Body>
                                    <div
                                        children={rowData[index].names.split(',').map((data: any) =>
                                            data === 'None' ? (
                                                <span>{data}</span>
                                            ) : (
                                                    <ListWrapper>
                                                        <li>{data}</li>
                                                    </ListWrapper>
                                                )
                                        )}
                                    />
                                </Body>
                                <br />
                            </Data>
                        </DataWrapper>
                    </>
                )}
            />
        </Table>
    ));
