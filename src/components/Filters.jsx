import React, { useId } from "react";
import "./Filters.css";
import { useState } from "react";

// import { useId } from "react";

export default function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [minPriceFilterId] = useId();
  const [categoryFilterId] = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de</label>
        <input
          type="range"
          name="price"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatil</option>
          <option value="smartphones">Telefonos</option>
        </select>
      </div>
    </section>
  );
}
