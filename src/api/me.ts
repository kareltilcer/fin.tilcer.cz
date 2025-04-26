import {API_ROOT} from "../model/constants.ts";
import {MeDto} from "../model/dto/me.dto.ts";

export const fetchMe = async (token: string) => {
    try {
        const response = await fetch(`${API_ROOT}/users/me`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch /me`);
        }

        const data = await response.json();

        return data as MeDto;
    } catch (error) {
        console.error('Error fetching /me:', error);
        throw error;
    }
}