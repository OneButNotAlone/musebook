# Paginator

The `Paginator` component is used to split large sets of data into smaller, more manageable pages. 

In the below example we are using the `Paginator` on a table.  We use a `PaginatorContainer` to share state between the `Paginator` & the table.

```jsx
<Paginator />
```

```jsx
import PaginatorContainer, { PaginatorRenderProps } from '../../../containers/PaginatorContainer';
import { Table } from '../../Organisms/Table/'


<PaginatorContainer >
    {({onLoad, startIndex, endIndex, prevPage, nextPage, onChange, rowsToShow}: PaginatorRenderProps) => (
        <>
            <Paginator 
                data={data} 
                onLoad={onLoad} 
                onChange={onChange} 
                startIndex={startIndex} 
                endIndex={endIndex} 
                nextPage={nextPage} 
                prevPage={prevPage} 
                rowsToShow={rowsToShow}
            />
            <Table 
                data={data} 
                startIndex={startIndex} 
                endIndex={endIndex}
            />
        </>
    )}
</PaginatorContainer>
```