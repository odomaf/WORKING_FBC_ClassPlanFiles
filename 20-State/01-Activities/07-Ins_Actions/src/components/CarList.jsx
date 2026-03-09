import { useGlobalContext } from "../utils/GlobalState";

// ======================================================
// CAR LIST
// ------------------------------------------------------
// Reads shared state from context and renders the list
// of cars currently in our garage inventory.
// ======================================================

export default function CarList() {
  const { cars, removeCar } = useGlobalContext();

  if (!cars.length) {
    return <p className="empty-state">No cars in the garage yet.</p>;
  }

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div className="car-card" key={car.id}>
          <div className="car-details">
            <h3>
              {car.year} {car.make} {car.model}
            </h3>
            <p>Inventory ID: {car.id}</p>
          </div>

          <button
            type="button"
            className="btn-remove"
            onClick={() => removeCar(car.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
