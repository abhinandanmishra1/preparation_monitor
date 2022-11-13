const apiUrl = "http://localhost:5000/api";

const getUsers = () => {
  return fetch(`${apiUrl}/user`)
    .then(response => response.json())
    .catch(error => {
      throw error
    })
}

const getUser = (id) => {
  return fetch(`${apiUrl}/user/${id}`)
    .then(response => response.json())
    .catch(error => {
      throw error
    })
}

const addUser = (user) => {
  return fetch(`${apiUrl}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .catch(error => {
      throw error
    })
}

const updateUser = (user) => {
  return fetch(`${apiUrl}/user/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .catch(error => {
      throw error
    })
}


export { 
  getUsers, 
  getUser,
  addUser,
  updateUser
}
