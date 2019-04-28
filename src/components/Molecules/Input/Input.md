# Input

Inputs are used to capture data/decisions from the user. The input suite includes `TextInput`, `Dropdown`, `RadioButton` and `Checkbox`.

## Usage

```html
    <TextInput label="Input Label" />

     <Dropdown>
        <option>Dropdown</option>
        <option>
            Some crazy long text repeated to make even longer Some crazy long text repeated
            to make even longer Some crazy long text repeated to make even longer
        </option>
    </Dropdown>

    <RadioButton name="option" value="option1" label="Option 1" checked={true} />
    <RadioButton name="option" value="option2" label="Option 2" checked={false} />

    <Checkbox name="option" value="option1" label="Option 1" checked={true} />
    <Checkbox name="option" value="option2" label="Option 2" checked={false} />
    <br />
    <Checkbox name="option" value="option3" label="Option 3" checked={false} />
    <Checkbox name="option" value="option4" label="Option 4" checked={false} />
```