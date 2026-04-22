"use client";

import type { BlockData } from "./types";

// Block 元件映射表 — 新增 Block 時在此註冊
const BLOCK_MAP: Record<
    string,
    React.ComponentType<{
        variant?: string;
        data: Record<string, unknown>;
        className?: string;
        isEditMode?: boolean;
        onUpdate?: (newBlockData: BlockData) => void;
    }>
> = {
    // Phase 1: 逐步加入
    // HeroBanner,
    // ProductHighlight,
    // CategoryShowcase,
    // AboutPreview,
    // NewsLatest,
    // ClientLogos,
    // Certifications,
    // VideoShowcase,
    // StatsCounter,
    // ContactCTA,
    // FAQ,
    // Testimonials,
};

interface BlockRendererProps {
    blocks: BlockData[];
    data: Record<string, unknown>;
    isEditMode?: boolean;
    onBlockUpdate?: (index: number, newBlockData: BlockData) => void;
}

export function BlockRenderer({
    blocks,
    data,
    isEditMode = false,
    onBlockUpdate,
}: BlockRendererProps) {
    return (
        <>
            {blocks.map((block, i) => {
                const Component = BLOCK_MAP[block.block];
                if (!Component) {
                    if (process.env.NODE_ENV === "development") {
                        console.warn(`[BlockRenderer] Unknown block: "${block.block}"`);
                    }
                    return null;
                }
                return (
                    <Component
                        key={`${block.block}-${i}`}
                        variant={block.variant}
                        data={data}
                        isEditMode={isEditMode}
                        onUpdate={
                            onBlockUpdate ? (newData) => onBlockUpdate(i, newData) : undefined
                        }
                    />
                );
            })}
        </>
    );
}
