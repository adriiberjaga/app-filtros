import React, { use, useId } from "react";
import "./Filters.css";
import { useState } from "react";
import { useFilters } from "../hooks/useFilters";
// import { useId } from "react";

export default function Filters() {

  const { filter, setFilter } = useFilters();

  const [minPriceFilterId] = useId();
  const [categoryFilterId] = useId();

  const handleChangeMinPrice = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilter((prevState) => ({
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
          value={filter.minPrice}
        />
        <span>{filter.minPrice}</span>
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
