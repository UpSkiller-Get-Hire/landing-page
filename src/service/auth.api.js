const API_BASE_URL = '/api'


export async function signup({email, password, role}) {
    const response = await fetch(`${API_BASE_URL}/auth/signup`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
                role
            })
        }
    );

    if(!response.ok){
        const errorText = await response.text();
        throw new Error(errorText || 'Signup Failed');
    }
    return true;
}

export async function login({ email, password }) {
    const response = await fetch(
        `${API_BASE_URL}/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Login failed');
    }

    return true;
}

async function refreshAccessToken(){
    const response = await fetch(
        `${API_BASE_URL}/auth/refresh`,
        {
            method: 'POST',
            credentials: 'include'
        }
    );
    return response.ok;
}

export async function fetchWithAuth(url,options={}){
    let response = await fetch(url,{
        ...options,
        credentials: 'include'
    });

    if(response.status === 401){
        const refreshed = await refreshAccessToken();

        if(refreshed){
            response = await fetch(url,{
                ...options,
                credentials: 'include'
            });
        } else {
            return null;
        }
    }
    return response.json();
}

export async function getCurrentUser(){
    return await fetchWithAuth(
        `${API_BASE_URL}/users/profile/me`,
        {
            method: 'GET'
        }
    );
}