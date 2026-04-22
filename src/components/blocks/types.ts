// Block 系統共用型別定義

/** 單一區塊的 JSON 結構 */
export interface BlockData {
    block: string;
    variant?: string;
    config?: Record<string, unknown>;
    items?: BlockItem[];
}

/** 區塊內的項目（混合型） */
export type BlockItem =
    | { type: "product"; id: string }
    | { type: "news"; id: string }
    | { type: "text"; content: string }
    | { type: "image"; src: string; alt?: string };

/** 所有 Block 元件必須遵守的 Props 介面 */
export interface BlockProps {
    variant?: string;
    data: Record<string, unknown>;
    className?: string;
    // Phase 2+ 編輯模式預留
    isEditMode?: boolean;
    onUpdate?: (newBlockData: BlockData) => void;
}
