import {API_ROOT} from "../model/constants.ts";
import {BudgetMonth, MonthDto} from "../model/dto/month.dto.ts";

export const fetchMonths = async (token: string) => {
    try {
        const response = await fetch(`${API_ROOT}/fin-tilcer-months`,
            {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch /months`);
        }

        const data = await response.json();
        console.log("Fetched months data:", data);
        return data.data as BudgetMonth[]
    } catch (error) {
        console.error('Error fetching /months:', error);
        throw error;
    }
}

export const postMonthSplit = async (token: string, body: MonthDto) => {
    try {
        const response = await fetch(`${API_ROOT}/fin-tilcer-months`,
            {
                method: 'POST',
                body: JSON.stringify({data: body}),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            },
        );

        if (!response.ok) {
            throw new Error(`Failed to POST /months`);
        }

    } catch (error) {
        console.error('Error in POST /months:', error);
        throw error;
    }
}

export const deleteMealPlan = async (token: string, mealPlanDocumentId: string) => {
    try {
        const response = await fetch(`${API_ROOT}/jidlo-tilcer-meal-plans/${mealPlanDocumentId}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            },
        );

        if (!response.ok) {
            throw new Error(`Failed to DELETE /meal-plans`);
        }

    } catch (error) {
        console.error('Error in DELETE /meal-plans:', error);
        throw error;
    }
}