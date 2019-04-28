import { Table } from './Table'
import { TableHead } from './TableHead';
import { TableBody} from './TableBody';

export * from './Table';
export * from './TableHead';
export * from './TableBody';

export default Object.assign(Table, {
    Head: TableHead,
    Body: TableBody
});
