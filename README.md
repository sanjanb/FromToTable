# FromToTable

[![npm version](https://badge.fury.io/js/fromto-table.svg)](https://badge.fury.io/js/fromto-table)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`FromToTable` is a React component library that provides a customizable and editable "From-To" table. This table allows users to input and edit data in a structured format, making it ideal for applications that require tracking changes over time or comparing two sets of data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install `FromToTable` via npm:

```bash
npm install fromto-table
```

Or via yarn:

```bash
yarn add fromto-table
```

## Usage

Import and use the `FromToTable` component in your React application:

```jsx
import React, { useState } from 'react';
import FromToTable from 'fromto-table';

function App() {
  const [data, setData] = useState([
    { id: 1, from: 'Value 1', to: 'Value 2' },
    { id: 2, from: 'Value 3', to: 'Value 4' },
  ]);

  const handleDataChange = (updatedData) => {
    setData(updatedData);
  };

  return (
    <div className="App">
      <h1>From-To Table Example</h1>
      <FromToTable data={data} onDataChange={handleDataChange} />
    </div>
  );
}

export default App;
```

## Props

| Prop             | Type     | Default | Description                                                                 |
|------------------|----------|---------|-----------------------------------------------------------------------------|
| `data`           | `Array`  | `[]`    | Array of objects representing the table rows. Each object should have `id`, `from`, and `to` properties. |
| `onDataChange`   | `Function` | `() => {}` | Callback function that is called whenever the table data changes. Receives the updated data array as an argument. |
| `columns`        | `Array`  | `[{ label: 'From', key: 'from' }, { label: 'To', key: 'to' }]` | Array of column definitions. Each object should have `label` and `key` properties. |

## Examples

### Basic Example

```jsx
import React, { useState } from 'react';
import FromToTable from 'fromto-table';

function App() {
  const [data, setData] = useState([
    { id: 1, from: 'Value 1', to: 'Value 2' },
    { id: 2, from: 'Value 3', to: 'Value 4' },
  ]);

  const handleDataChange = (updatedData) => {
    setData(updatedData);
  };

  return (
    <div className="App">
      <h1>Basic From-To Table</h1>
      <FromToTable data={data} onDataChange={handleDataChange} />
    </div>
  );
}

export default App;
```

### Custom Columns

```jsx
import React, { useState } from 'react';
import FromToTable from 'fromto-table';

function App() {
  const [data, setData] = useState([
    { id: 1, origin: 'Location 1', destination: 'Location 2' },
    { id: 2, origin: 'Location 3', destination: 'Location 4' },
  ]);

  const columns = [
    { label: 'Origin', key: 'origin' },
    { label: 'Destination', key: 'destination' },
  ];

  const handleDataChange = (updatedData) => {
    setData(updatedData);
  };

  return (
    <div className="App">
      <h1>Custom Columns From-To Table</h1>
      <FromToTable data={data} columns={columns} onDataChange={handleDataChange} />
    </div>
  );
}

export default App;
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Author**: [Sanjan B M](https://github.com/sanjanb)
```