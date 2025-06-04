import {BudgetMonthData} from "../model/dto/month.dto.ts";
import {Card, Col, Row, Typography} from 'antd';

const {Title, Text} = Typography;

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
        <Row gutter={20} style={{padding: '20px'}}>
            {/* Column 1: Incomes */}
            <Col span={8}>
                <Card style={{border: 'none', textAlign: "right"}}>
                    <Title level={5} style={{marginTop: 0}}>Incomes</Title>
                    <div style={{textAlign: "right"}}>
                        <Text style={{display: 'block'}}>Kája: CZK {Math.floor(budget.incomeKaja)}</Text>
                        <Text style={{display: 'block'}}>Andy: CZK {Math.floor(budget.incomeAndy)}</Text>
                        <Text type="secondary" style={{display: 'block'}}>Total: CZK {Math.floor(totalIncome)}</Text>
                    </div>
                </Card>
            </Col>

            {/* Column 2: Joined Account */}
            <Col span={8}>
                <Card style={{border: 'none'}}>
                    <Title level={5} style={{marginTop: 0, textAlign: "right"}}>Převod na Kandy</Title>
                    <div style={{textAlign: "right"}}>
                        <Text style={{display: 'block'}}>Kája: CZK {Math.floor((budget.incomeKaja * joinedAccountPortion))}</Text>
                        <Text style={{display: 'block'}}>Andy: CZK {Math.floor((budget.incomeAndy * joinedAccountPortion))}</Text>
                        <Text type="secondary" style={{display: 'block'}}>Total: CZK {Math.floor(totalIncome)}</Text>
                    </div>
                </Card>
            </Col>

            {/* Column 3: Savings */}
            <Col span={8}>
                <Card style={{border: 'none'}}>
                    <Title level={5} style={{marginTop: 0, textAlign: "right"}}>{"Kandy -> Spořák"}</Title>
                    <div style={{textAlign: "right"}}>
                        <Text style={{display: 'block'}}>
                            Savings fun ({(savings1Portion * 100)}%): CZK {Math.floor(savings1Amount)}
                        </Text>
                        <Text style={{display: 'block'}}>
                            Savings no-fun ({(savings2Portion * 100)}%): CZK {Math.floor(savings2Amount)}
                        </Text>
                        <Text type="secondary" style={{display: 'block'}}>
                            Total Saved: CZK {Math.floor((savings1Amount + savings2Amount))}
                        </Text>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default BudgetFlow;
