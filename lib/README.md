# Bootstrap Utilities
Utilities for working with Bootstrap in JavaScript and TypeScript applications.

The types and functions are not exported as default, so you can import in one of the following ways:
```javascript
// ES6
import {functionName} from '@ptolemy2002/bs-utils';
// CommonJS
const {functionName} = require('@ptolemy2002/bs-utils');
```

## Type Reference
```typescript
type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type BreakpointComparison = "same" | "min" | "max";
```

## Variables
- `breakpointMap` - (`Readonly<Omit<Map<Breakpoint, number>, "set">>`) - A map containing each breakpoint and its corresponding pixel value. The "set" method is not available, as this is a read-only map. The keys are ordered from smallest to largest.
- `breakpoints` - (`ReadonlyArray<Breakpoint>`) - An array containing all of the breakpoints in order from smallest to largest.

## Functions
### breakpointToIndex
Returns the index of the breakpoint in the `breakpoints` array and Map or `-1` if the breakpoint is not found.

#### Parameters
- `breakpoint` - (`Breakpoint`) - The breakpoint to find the index of.

#### Returns
`number` - The index of the breakpoint in the `breakpoints` array and Map or `-1` if the breakpoint is not found. `-1` should never be returned if you're using TypeScript.

### indexToBreakpoint
Returns the breakpoint at the index in the `breakpoints` array and Map or `null` if the index is out of range.

#### Parameters
- `index` - (`number`) - The index of the breakpoint to find.

#### Returns
`Breakpoint | null` - The breakpoint at the index in the `breakpoints` array and Map or `null` if the index is out of range.

### breakpointValueRange
Returns an array containing the minimum and maximum pixel values for the specified breakpoint range.

#### Parameters
- `breakpoint1` - (`Breakpoint | number`) - The first breakpoint in the range. By default, this is `0`
- `breakpoint2` - (`Breakpoint | number | null`) - The second breakpoint in the range or `null` if the range should have no upper bound. By default, this is `null`

#### Returns
`[number, number | null]` - An array containing the minimum and maximum pixel values for the specified breakpoint range, or `null` as the second element if the range has no upper bound.

### breakpointComparisonRange
Returns an array containing the minimum and maximum pixel values for the specified breakpoint comparison.

#### Parameters
- `breakpoint` - (`Breakpoint`) - The breakpoint to compare to.
- `comparison` - (`BreakpointComparison`) - The comparison to make.

#### Returns
`[number, number | null]` - An array containing the minimum and maximum pixel values for the specified breakpoint comparison, or `null` as the second element if the range has no upper bound.

## Peer Dependencies
- None

## Commands
The following commands exist in the project:

- `npm run uninstall` - Uninstalls all dependencies for the library
- `npm run reinstall` - Uninstalls and then Reinstalls all dependencies for the library
- `npm run example-uninstall` - Uninstalls all dependencies for the example app
- `npm run example-install` - Installs all dependencies for the example app
- `npm run example-reinstall` - Uninstalls and then Reinstalls all dependencies for the example app
- `npm run example-start` - Starts the example app after building the library
- `npm run build` - Builds the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump