# TableHead

The `TableHead` component is used to create the header section of your table. It has a prop `headers`, which takes ana Object Array of the titles you want to set for each column on your table.  The titles are set in the order they are passed in as. 

```jsx
<TableHead />
```

```jsx
import { Table } from '../../Atoms/Table';
import { TableHead } from '../TableHead/';

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
            { name: 'Auto Replace'}
        ]}
    />
</Table>
```