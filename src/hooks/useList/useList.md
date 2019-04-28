# useList hook

Custom react hook implementing a [list data structure](https://en.wikipedia.org/wiki/List_(abstract_data_type)).
Use to manage, sort, and filter a dataset.

- [useList hook](#uselist-hook)
  - [API](#api)
  - [usage examples](#usage-examples)
  - [Typescript](#typescript)
  - [Sorting Data](#sorting-data)
  - [Filtering Data](#filtering-data)
  - [Resetting data](#resetting-data)

## API

| key     | type                    | use case                                                               |
|---------|-------------------------|------------------------------------------------------------------------|
| list    | Array T                 | The list of data                                                       |
| set     | Function **[mutator]**  | Set the value of the list.                                             |
| isEmpty | Function **[selector]** | True if `list` is empty                                                |
| first   | Function **[selector]** | Returns the first element in the list                                  |
| last    | Function **[selector]** | Returns the last element in the list                                   |
| reset   | Function **[mutator]**  | Sets the `list` value to the inital value                              |
| push    | Function **[mutator]**  | Append entries to the `list`                                           |
| sort    | Function **[mutator]**  | Sorts the `list` based on the result of a comparitor callback function |
| filter  | Function **[mutator]**  | Filters the `list` based on the results of a filter callback function  |

## usage examples

You can provide an empty array or an array of values useList.  This will become the initial value in the `list` export.

```jsx

const FunctionComponent = () => {

    const list = useList([
        { name: 'amanda'},
        { name: 'phil'},
        { name: 'yash'},
        { name: 'ricky'}
    ]);

}

```

## Typescript

When using a new List you can specify the shape of the data structure.

```jsx

const FunctionComponent = () => {

    const list = useList<{ name: string; }>([
        { name: 'amanda'},
        { name: 'phil'},
        { name: 'yash'},
        { name: 'ricky'}
    ]);

}

```

## Sorting Data

Lists have a `sort` function which can be used to sort the data.  This sort function also accepts a comparitor callback funtion to allow for more advanced sorting techniques.

See the [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) documentation on MDN.

```jsx

const FunctionComponent = () => {

    const people = useList([
        { name: 'amanda'},
        { name: 'phil'},
        { name: 'yash'},
        { name: 'ricky'}
    ]);

    people.sort();

    console.log(people.list);

    /* console log output is the sorted array
      [
        { name: 'amanda'},
        { name: 'phil'},
        { name: 'ricky'},
        { name: 'yash'}
      ]
    */

}

```

## Filtering Data

Lists can filter data by passing a filter callback to the `filter` function.
This callback is the same as [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```jsx

const FunctionComponent = () => {

    const people = useList([
        { name: 'amanda'},
        { name: 'phil'},
        { name: 'yash'},
        { name: 'ricky'}
    ]);


    // Filtering the values that include 'phi' in the name
    people.filter((value: { name: string }) => {
        return value.name.includes('phi');
    });

    console.log(people.list);

    /* console log output is the sorted array
      [
        { name: 'phil'}
      ]
    */

}

```

## Resetting data

If you would like the to reset the list to the initial dataset before filtering, you can call the `reset` function.

```jsx

const FunctionComponent = () => {

    const people = useList([
        { name: 'amanda'},
        { name: 'phil'},
        { name: 'yash'},
        { name: 'ricky'}
    ]);

    people.sort();

    people.reset()

    console.log(list);

    /* console log output is the original array order
      [
        { name: 'amanda'},
        { name: 'phil'},
        { name: 'yash'},
        { name: 'ricky'}
      ]
    */

}

```
