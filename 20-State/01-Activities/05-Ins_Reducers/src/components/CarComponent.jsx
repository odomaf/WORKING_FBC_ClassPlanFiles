import { useCar } from "../utils/CarContext";

// =====================================================
// CAR COMPONENT
// -----------------------------------------------------
// Displays a single car in our garage inventory
// =====================================================

export default function CarComponent({ car }) {
  const { removeCar } = useCar();

  return (
    <div className="car-card">
      <div className="car-details">
        {car.year} {car.make} {car.model}
      </div>

      <button className="btn-remove" onClick={() => removeCar(car.id)}>
        Remove
      </button>
    </div>
  );
}
