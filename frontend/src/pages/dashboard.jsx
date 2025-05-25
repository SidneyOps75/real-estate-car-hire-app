// frontend/src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/');

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const propRes = await fetch('http://localhost:5000/api/properties');
      const carRes = await fetch('http://localhost:5000/api/cars');
      const propData = await propRes.json();
      const carData = await carRes.json();
      setProperties(propData);
      setCars(carData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Properties</h2>
        <ul className="list-disc list-inside">
          {properties.map((prop) => (
            <li key={prop.id}>{prop.name} – {prop.status}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Cars</h2>
        <ul className="list-disc list-inside">
          {cars.map((car) => (
            <li key={car.id}>{car.model} – {car.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
