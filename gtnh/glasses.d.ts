/** @noSelf **/
declare namespace Glasses {
    interface IAttribute {
        getID(): number;
        setVisible(visible: boolean): void;
        isVisible(): boolean;
    }

    interface I2DVertex extends IAttribute {
        setVertex(vertexId: number, x: number, y: number): void;
        GetVertexCount(): number;
    }

    interface I3DVertex extends IAttribute {
        setVertex(vertexId: number, x: number, y: number, z: number): void;
        GetVertexCount(): number;
    }

    interface IAlpha extends IAttribute {
        setAlpha(alpha: number): void;
    }

    interface IItemable extends IAttribute {
        setItem(dbAddress: string, dbIndex: number): void;
    }

    interface IColorizable extends IAttribute {
        setColor(r: number, g: number, b: number): void;
        getColor(): LuaMultiReturn<[number, number, number]>;
    }

    interface IPositionable extends IAttribute {
        setPosition(x: number, y: number): void;
        getPosition(): LuaMultiReturn<[number, number]>;
    }

    interface I3DPositionable extends IAttribute {
        setPosition(x: number, y: number, z: number): void;
        getPosition(): LuaMultiReturn<[number, number, number]>;
    }

    interface IResizable extends IAttribute {
        setSize(height: number, width: number): void;

        /**
         * Returns [width, height]
         */
        getSize(): LuaMultiReturn<[number, number]>
    }

    interface IRotatable extends IAttribute {
        setRotation(degrees: number): void;
        getRotation(): number;
    }

    interface IScalable extends IAttribute {
        setScale(scale: number): void;
        getScale(): number;
    }

    interface ITextable extends IAttribute {
        setText(text: string): void;
        getText(): string;
    }

    interface IThroughVisibility extends IAttribute {
        setVisibleThroughObjects(status: boolean): void;
        isVisibleThroughObjects(): boolean;
    }

    interface IViewDistance extends I3DPositionable {
        setViewDistance(distance: number): void;
        getViewDistance(): number;
    }

    interface ILookable extends IAttribute {
        setLookingAt(enable: boolean): void;
        setLookingAt(x: number, y: number, z: number): void;
        getLookingAt(): LuaMultiReturn<[number, number, number, boolean]>;
    }

    interface Dot2D extends IPositionable, IColorizable, IAlpha, IScalable {}
    interface ItemIcon2D extends IItemable, IPositionable, IScalable, IRotatable {}
    interface Triangle2D extends IColorizable, IAlpha, I2DVertex {}
    interface Quad2D extends Triangle2D {}
    interface Rect2D extends IPositionable, IResizable, IColorizable, IAlpha {}
    interface Text2D extends ITextable, IRotatable, IPositionable, IColorizable, IAlpha, IScalable {}
    
    interface Cube3D extends I3DPositionable, IAlpha, IThroughVisibility, IColorizable, IViewDistance, ILookable, IScalable { }
    interface Dot3D extends IAlpha, IScalable, IColorizable, I3DPositionable, IThroughVisibility, IViewDistance { }
    interface Line3D extends IAlpha, IColorizable, I3DVertex, IScalable, IThroughVisibility { }
    interface Triangle3D extends IAlpha, IColorizable, IThroughVisibility, I3DVertex { }
    interface Quad3D extends Triangle3D { }
    interface Text3D extends IViewDistance, ILookable, I3DPositionable, ITextable, IColorizable, IScalable, IAlpha, IThroughVisibility { }
    
    interface ArGlasses {
        getBindPlayers(): LuaMultiReturn<string[]>;
        getObjectCount(): number;
        removeObject(widgetId: number): boolean;
        /**
         * Also resets autoincrement value.
         * This is important for GTNH because widgets there renders by their widgetID order.
         */
        removeAll(): void;
        newUniqueKey(): number;

        addDot(): Dot2D;
        addTriangle(): Triangle2D;
        addQuad(): Quad2D;
        addRect(): Rect2D;
        addTextLabel(): Text2D;
        addItem(): ItemIcon2D;

        addDot3D(): Dot3D;
        addTriangle3D(): Triangle3D;
        addQuad3D(): Quad3D;
        addCube3D(): Cube3D;
        addFloatingText(): Text3D;
        addLine3D(): Line3D;
    }
}