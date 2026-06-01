# Sankey Chart Implementation

This document describes how the Sankey Chart demonstration is implemented using `@visuallyjs/browser-ui-react`.

## Components

The application uses the following core component from `@visuallyjs/browser-ui-react`:

- **`SankeyChartComponent`**: A specialized component for rendering Sankey diagrams, which visualize the flow of data or resources between different nodes.

## Configuration Options

The `SankeyChartComponent` is configured with an options object and supports dynamic pivoting:

- **`pivot`**: The chart can dynamically re-group the data based on a specific attribute (e.g., "Transit Mode" or "Carrier") selected by the user via a dropdown menu.
- **`linkColorStrategy`**: Set to `"source-target"` to color the flows based on their origin and destination.
- **`labelProperty`**: Specifies which property in the data to use as the label for each node.
- **`labels`**: Configures the appearance of labels, including padding and background color.
- **`tooltipSuffix`**: Adds a unit suffix (e.g., "TWh") to the values shown in tooltips.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Layout for the pivot controls and the chart container is defined in `sankey.css`.
