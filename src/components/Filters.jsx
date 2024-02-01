import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value;
    setFilters((prevFilterState) => ({
      ...prevFilterState,
      minPrice: newMinPrice,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1749"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all"></option>
          <option value="home-decoration">home-decoration</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">smartphones</option>
          <option value="fragrances">fragrances</option>
          <option value="skincare">skincare</option>
          <option value="groceries">groceries</option>
        </select>
      </div>
    </section>
  );
}
