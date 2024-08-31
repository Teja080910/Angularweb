import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';
import { api } from "../api/api";

export const CheckUser = async (personal: any, http: HttpClient) => {
    if (personal.gmail[0]) {
        try {
            const res: any = await firstValueFrom(http.post(`${api}/auth/checkuser`, personal));
            if (res?.message) {
                return res?.data;
            } else {
                console.log('Gmail not found in the response');
                return "Gmail not found in the response";
            }
        } catch (error) {
            console.error('Error sending data:', error);
            return { error: 'Error sending data' };
        }
    } else {
        return { error: 'Enter gmail' };
    }
};
