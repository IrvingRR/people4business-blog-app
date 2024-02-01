const API_URL = import.meta.env.VITE_API_URL;

export const getEntriesService = async () => {
    try {
        const request = await fetch(`${API_URL}/entries`);
        
        if(request.ok && request.status === 200) {
            const response = await request.json();
            return response;
        }
        
    } catch (error) {
        console.log('Error:', error);
    }
};