export const createUser = async (userData:any) => {
    try {
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        console.log(response)

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Failed to create user: ${errorMessage}`);
        }

        const data = await response.json();
        console.log(data)
        return data; // This could be an object confirming user creation or inserted user data
    } catch (error:any) {
        console.log(error)
        console.error('Error creating user:', error.message);
        throw error;
    }
};