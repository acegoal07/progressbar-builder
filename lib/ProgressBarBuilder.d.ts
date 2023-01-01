export function ProgressBarBuilder(settings?: {
    end: number;
    position: number;
    size: number;
    line: string;
    slider: string;
    hideInfo: boolean;
    percentageInfo: boolean;
}): Promise<string>;
