export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type BreakpointComparison = "same" | "min" | "max";

// Remove set method from breakpointMap so we can make sure it's not modified
export const breakpointMap: Readonly<Omit<Map<Breakpoint, number>, "set">> = Object.freeze(
    new Map<Breakpoint, number>([
        ["xs", 0],
        ["sm", 576],
        ["md", 768],
        ["lg", 992],
        ["xl", 1200],
        ["xxl", 1400]
    ])
);

export const breakpoints: ReadonlyArray<Breakpoint> = Object.freeze(
    Array.from(breakpointMap.keys())
);

export function breakpointToIndex(breakpoint: Breakpoint): number {
    return breakpoints.indexOf(breakpoint);
}

export function indexToBreakpoint(index: number): Breakpoint {
    return breakpoints[index];
}

export function breakpointValueRange(breakpoint1: Breakpoint | number = 0, breakpoint2: Breakpoint | number | null = null): [number, number | null] {
    if (typeof breakpoint1 === "string") breakpoint1 = breakpointToIndex(breakpoint1);
    if (typeof breakpoint2 === "string") breakpoint2 = breakpointToIndex(breakpoint2);

    const value1 = breakpointMap.get(indexToBreakpoint(breakpoint1))!;
    if (breakpoint1 === breakpoints.length - 1) return [value1, null];

    const value2 = breakpoint2 === null || breakpoint2 === breakpoints.length - 1 ? null : breakpointMap.get(indexToBreakpoint(breakpoint2 + 1))! - 1;
    return [value1, value2];
}

export function breakpointComparisonRange(breakpoint: Breakpoint | number, comparison: BreakpointComparison): [number, number | null] {
    if (comparison === "max") return breakpointValueRange(0, breakpoint);
    if (comparison === "min") return breakpointValueRange(breakpoint, null);
    return breakpointValueRange(breakpoint, breakpoint);
}