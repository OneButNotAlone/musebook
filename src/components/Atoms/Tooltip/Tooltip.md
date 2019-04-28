# Tooltip

This component displays a tooltip when the parent element is hovered or receives focus.

By default it renders as a `<div>`

## Usage Examples

```jsx

import { Button, Tooltip } from "@walmartlabs/Aether";

<Button>
  Hover me
  <Tooltip>Tooltip</Tooltip>
</Button>

```

Multiple Tooltips are possible

```jsx

import { Button, Tooltip } from "@walmartlabs/Aether";

<Button margin="50px 80px">
  Hover me
  <Tooltip placement="top"><Tooltip.Arrow />Tooltip</Tooltip>
  <Tooltip placement="right"><Tooltip.Arrow />Tooltip</Tooltip>
  <Tooltip placement="bottom"><Tooltip.Arrow />Tooltip</Tooltip>
  <Tooltip placement="left"><Tooltip.Arrow />Tooltip</Tooltip>
</Button>

```