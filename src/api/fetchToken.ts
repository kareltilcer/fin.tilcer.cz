import {API_ROOT} from "../model/constants.ts";

export const fetchToken = async (identifier: string, password: string) => {
    try {
        const response = await fetch(`${API_ROOT}/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                identifier,
                password
            }),
        });

        if (!response.ok) {
            throw new Error("Invalid credentials");
        }

        const data = await response.json();

        return data.jwt;
    }
    catch (error) {
        throw error
    }
}