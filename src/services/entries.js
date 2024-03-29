const API_URL = import.meta.env.VITE_API_URL;

export const getEntriesService = async () => {
    try {
        const request = await fetch(`${API_URL}/entries`);
        const response = await request.json();
        
        if(request.ok && request.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
        
    } catch (error) {
        console.log('Error Service:', error);
    }
};

export const createEntryService = async (data) => {
    try {
        const request = await fetch(`${API_URL}/entries`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        
        const response = await request.json();

        if(request.ok && request.status === 201) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
        
    } catch (error) {
        console.log('Error Service:', error);
    }
};

export const getEntryService = async (id) => {
    try {
        const request = await fetch(`${API_URL}/entries/${id}`);
        const response = await request.json();
        
        if(request.ok && request.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
        
    } catch (error) {
        console.log('Error Service:', error);
    }
};

export const editEntryService = async (id, data) => {
    try {
        const request = await fetch(`${API_URL}/entries/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        const response = await request.json();
        
        if(request.ok && request.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    } catch (error) {
        console.log('Error Service:', error);
    }
};

export const deleteEntryService = async (id) => {
    try {
        const request = await fetch(`${API_URL}/entries/${id}`, { method: 'DELETE' });

        const response = await request.json();
        
        if(request.ok && request.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    } catch (error) {
        console.log('Error Service:', error);
    }
};

export const searchEntriesService = async (filter, search) => {
    try {
        const request = await fetch(`${API_URL}/entries?term=${filter.value}&value=${search}`);
        const response = await request.json();

        if(request.ok && request.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
        
    } catch (error) {
        console.log('Error Service:', error);
    }
};