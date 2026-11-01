import {AccessToken, Credentials, User, UserSessionToken} from './user.resources'

class AuthService {
    baseURL: string = 'http://localhost:8080/api/v1/users';
    static AUTH_PARAM: string = "_auth";

    async authenticate(credentials: Credentials): Promise<AccessToken> {
    const response = await fetch(this.baseURL+"/auth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        
        if (response.status == 401) {
            throw new Error("User or password are incorrect");
        }

        return await response.json();
    }
}

export const userAuth = new AuthService();