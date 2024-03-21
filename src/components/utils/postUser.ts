export const postUser = async(newUser:any) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      };
    const isInserted = await fetch('http://localhost:5000/users', requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.insertedId){
          return {
            email: newUser.email,
            name: newUser.name
          }
        }
      });
    console.log(isInserted)
    return isInserted
}
