const apiUrl = "http://localhost:5000/api";

const getGyms = () => {
  return fetch(`${apiUrl}/gym`)
    .then(response => response.json())
    .catch(error => {
      throw error
    })
}

const getGym = (id) => {
  return fetch(`${apiUrl}/gym/${id}`)
    .then(response => response.json())
    .catch(error => {
      throw error
    })
}

const addGym = (gym) => {
  return fetch(`${apiUrl}/gym`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(gym)
  })
    .then(response => response.json())
    .catch(error => {
      throw error
    })
}

const updateGym = (gym) => {
  return fetch(`${apiUrl}/gym/${gym.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(gym)
  })
    .then(response => response.json())
    .catch(error => {
      throw error
    })
}


export { 
  getGyms, 
  getGym,
  addGym,
  updateGym
}
