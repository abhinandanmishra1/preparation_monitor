import React, {useEffect,useState} from 'react';
import { getGyms } from '../../api/gym';
const Gym = () => {
  const [gyms, setGyms] = useState([]);

  async function getAllGyms() {
    const gyms = await getGyms();
    setGyms(gyms);
  }
  useEffect(() => {
    getAllGyms();
  }, []);
  return (
    <>
    {
      gyms && (
        gyms.map((gym) => (
          <div key={gym.id}>
            <h2>{gym.title}</h2>
          </div>
        ))
      )
    }
    </>
  )
}

export default Gym;
