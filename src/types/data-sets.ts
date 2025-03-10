export interface DataSets {
    readonly id: number | string;
    readonly question: string;
    readonly answer: string;
    readonly keywords: string[];
    readonly patternSuggestions?: number[]; 
    readonly category?: string;
    readonly formatSuggestion?: string[]; 
}