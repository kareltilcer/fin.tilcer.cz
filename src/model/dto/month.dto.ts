interface MonthlyBudgetSplit {
    incomeKaja: number;
    incomeAndy: number;
    wantsKaja: number;
    wantsAndy: number;
    funSavings: number;
    noFunSavings: number;
}

export interface MonthDto {
    date: string;
    data: MonthlyBudgetSplit;
}

export type BudgetMonth = {
    id: number;
    documentId: string;
    data: BudgetMonthData;
    date: string; // in YYYY-MM-DD format
    createdAt: string; // ISO timestamp
    updatedAt: string; // ISO timestamp
    publishedAt: string; // ISO timestamp
};

export type BudgetMonthData = {
    wantsAndy: number;
    wantsKaja: number;
    funSavings: number;
    incomeAndy: number;
    incomeKaja: number;
    noFunSavings: number;
}