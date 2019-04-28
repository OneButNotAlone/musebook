# Checkbox

 heckboxes are used to capture user decisions. 

## Table of Contents

- [Checkbox](#checkbox)
  - [Implementation](#implementation)
  - [Props](#props)
  - [Usage](#usage)

## Implementation

This Checkbox is constructed out of the [Reakit](https://reakit.io/components/input) `Input` component and provides all available values and capabilities of the Reakit component implementation.

## Props

Prop            | Type                | Required | Default value | Description
----------------|---------------------|----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------
label           | string              | true     | ''            | The label for the checkbox
name            | string              | true     | ''            | The name for the checkbox
value           | string              | true     | ''            | The value for the checkbox 
checked         | boolean             | true     | false         | A boolean for whether or not the checkbox is checked
onChange        | () => any;          | false    | null          | A function for deciding what should happen when a checkbox is checked

## Usage

Import the component from Aether

```typescript
import { Checkbox } from '@walmartlabs/Aether'
```

The Checkbox is standalone and is ready for use.