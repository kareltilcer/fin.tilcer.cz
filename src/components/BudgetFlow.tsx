import {BudgetMonthData} from "../model/dto/month.dto.ts";

interface Props {
    budget: BudgetMonthData;
}

const BudgetFlow= ({ budget }: Props) => {
    const totalIncome = budget.incomeKaja + budget.incomeAndy;

    // Set proportions for joined account and savings
    const joinedAccountPortion = 0.8;
    const savings1Portion = 0.1;
    const savings2Portion = 0.1;

    const savings1Amount = totalIncome * savings1Portion;
    const savings2Amount = totalIncome * savings2Portion;

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px', gap: '20px'}}>
            {/* Column 1: Incomes */}
            <div style={{textAlign: "right"}}>
                <h3 className="font-bold text-lg">Incomes</h3>
                <div>Kája: CZK{budget.incomeKaja.toFixed(2)}</div>
                <div>Andy: CZK{budget.incomeAndy.toFixed(2)}</div>
                <div style={{color: "gray"}}>Total: CZK{totalIncome.toFixed(2)}</div>
            </div>

            {/* Column 2: Joined Account */}
            <div style={{textAlign: "right"}}>
                <h3 className="font-bold text-lg">Joined Account</h3>
                <div>Kája: CZK{(budget.incomeKaja * joinedAccountPortion).toFixed(2)}</div>
                <div>Andy: CZK{(budget.incomeAndy * joinedAccountPortion).toFixed(2)}</div>
                <div style={{color: "gray"}}>Total: CZK{totalIncome.toFixed(2)}</div>
            </div>

            {/* Column 3: Savings */}
            <div style={{textAlign: "right"}}>
                <h3 className="font-bold text-lg">Savings</h3>
                <div>Savings fun ({(savings1Portion * 100).toFixed(0)}%): ${savings1Amount.toFixed(2)}</div>
                <div>Savings no-fun ({(savings2Portion * 100).toFixed(0)}%): ${savings2Amount.toFixed(2)}</div>
                <div style={{color: "gray"}}>Total Saved: ${(savings1Amount + savings2Amount).toFixed(2)}</div>
            </div>
        </div>
    );
};

export default BudgetFlow;
