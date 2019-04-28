# TableBody

The `TableBody` component is used to create the `<tbody />`, `<tr />` & `<td />` sections of your table. It also includes expandable/collapsible rows within the table. It has 1 prop, `resp`, which is an Object Array of the data coming back from your api that you want to display in the table.

```jsx
<TableBody />
```

```jsx
import { Table } from '../../Atoms/Table';
import { TableBody } from './TableBody';

const resp = [
    {
        yes_no: 'No',
        numbers: '1,2,3,4',
        names: 'name1, name2, name3, name4',
        telegraf: 'No',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    },
    {
        yes_no: 'No',
        numbers: '2,3,4,5',
        names: 'name1, name2, name3, name4',
        telegraf: 'No',
        computers: 'mac, pc, linux',
        someDate: '2018-11-08 23:58:41',
        dr: 'Yes',
        auto_replace: 'true'
    }
];


<Table>
    <TableBody resp={resp} />
</Table>
```