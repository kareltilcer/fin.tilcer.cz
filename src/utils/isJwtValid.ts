export const isJwtValid = (token: string) => {
    try {
        const [, payload] = token.split('.'); // Split the JWT to get the payload part
        const decodedPayload = JSON.parse(atob(payload)); // Decode the payload from base64

        if (!decodedPayload.exp) {
            throw new Error("JWT does not have an 'exp' field.");
        }

        const currentTime = Math.floor(Date.now() / 1000); // Get the current time in seconds
        return decodedPayload.exp > currentTime; // Check if the token is still valid
    } catch (error) {
        return false; // Return false if the token is invalid or expired
    }
}