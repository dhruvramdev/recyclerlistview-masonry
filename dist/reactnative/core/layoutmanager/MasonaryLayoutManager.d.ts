/***
 * Computes the positions and dimensions of items that will be rendered by the list. The output from this is utilized by viewability tracker to compute the
 * lists of visible/hidden item.
 * Note: In future, this will also become an external dependency which means you can write your own layout manager. That will enable everyone to layout their
 * views just the way they want. Current implementation is a StaggeredList
 */
import LayoutProvider, { Dimension } from "../dependencies/LayoutProvider";
import { LayoutManagerInterface, Point, Rect } from "../dependencies/LayoutManagerInterface";
export default class MasonaryLayoutManager implements LayoutManagerInterface {
    private _layoutProvider;
    private _window;
    private _totalHeight;
    private _totalWidth;
    private _layouts;
    private _isHorizontal;
    private _columnCount;
    constructor(columnCount: number, layoutProvider: LayoutProvider, dimensions: Dimension, isHorizontal?: boolean, cachedLayouts?: Rect[]);
    getLayoutDimension(): Dimension;
    getLayouts(): Rect[];
    getOffsetForIndex(index: number): Point;
    overrideLayout(index: number, dim: Dimension): void;
    setMaxBounds(itemDim: Dimension): void;
    reLayoutFromIndex(startIndex: number, itemCount: number): void;
    private _checkBounds(itemX, itemY, itemDim, isHorizontal);
}
