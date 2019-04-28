# Popup

Popups are used to show additional information or capture additional data/decisions from the user. The popup suite includes `Popup` and `Popup.Toggle`.

## Props

Prop | Type | Required | Default value | Description
--- | --- | --- | --- | ---
disableBackgroundClose | boolean | No | false | Used to disable the ability to close the popup by clicking in the background

## Usage

All children passed in `<Popup>` will make up for the content to be shown within the popup. Any component (button for example) passed within `<Popup.Toggle>` open/close the popup when clicked.

### Examples

The following code will create a button to open a popup which can be closed by clicking anywhere in the background or hitting the "Esc" key.

```html
<Popup>
    <h1>Popup content</h1>
    <p>Click anywhere in the background to close this popup</p>
</Popup>

<Popup.Toggle>
    <button>Open popup</button>
</Popup.Toggle>
```

To add a close button inside the popup, add the `Popup.Toggle` component inside the Popup as shown below.

```html
<Popup>
    <h1>Popup content</h1>
    <p>Click anywhere in the background to close this popup</p>
    <Popup.Toggle>
        <button>Close popup</button>
    </Popup.Toggle>
</Popup>

<Popup.Toggle>
    <button>Open popup</button>
</Popup.Toggle>
```

You can also disable the closing of the popup from the background or the Esc key by passing it the `disableBackgroundClose` prop with value `true` as shown below.

```html
<Popup disableBackgroundClose={true}>
    <h1>Popup content</h1>
    <p>Click anywhere in the background to close this popup</p>
    <Popup.Toggle>
        <button>Close popup</button>
    </Popup.Toggle>
</Popup>

<Popup.Toggle>
    <button>Open popup</button>
</Popup.Toggle>
```
