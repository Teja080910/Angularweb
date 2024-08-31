import { HttpClient } from '@angular/common/http';
import { api } from "../api/api";

export const OpenFile = async (filename: string, http: HttpClient) => {
    try {
        const url = `${api}/auth/file/${filename}`;
        const response: any = await http.get(url, { responseType: 'blob' }).toPromise();
        const fileType = response.type;
        if (fileType.startsWith('image/')) {
            const imageBlob = new Blob([response], { type: fileType });
            const imageUrl = URL.createObjectURL(imageBlob);
            return { url: imageUrl, type: "image" };
        } else if (fileType === 'image/svg+xml') {
            const reader = new FileReader();
            return new Promise((resolve) => {
                reader.onload = (e) => {
                    resolve({ url: e.target?.result as string, type: "svg" });
                };
                reader.readAsText(response);
            });
        } else {
            console.error('The file is not an image');
            return null;
        }
    } catch (e) {
        console.error('Error fetching file:', e);
        return null;
    }
};
