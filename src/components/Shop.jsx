import React, { useState, useEffect } from 'react';
import '../styles/shop.css';
import { Link } from 'react-router-dom';
import Card from './Card';
import FilterBox from './FilterBox';
import ScrollToTop from './functions/ScrollToTop';

const Shop = ({
  cardsArray,
  category,
  hero,
  heroId,
  gender,
  categories,
  setCategories,
}) => {
  const cards = cardsArray;
  const [filters, setFilters] = useState({
    sort: 'default',
    color: 'all',
    type: 'all',
    brand: 'all',
  });
  const [currentItems, setItems] = useState([...cards]);

  useEffect(() => {
    setItems(cards.filter((item) => item.gender === gender));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="shop">
      <ScrollToTop />
      <div id="shop-gradient">
        <h1 id="shop-title">{category}</h1>
      </div>
      <img id={heroId} src={hero} alt="hero" />
      <div id="filter-container">
        <FilterBox
          filters={filters}
          setFilters={setFilters}
          currentItems={currentItems}
          setItems={setItems}
          cards={cards}
          gender={gender}
          categories={categories}
          setCategories={setCategories}
        />
      </div>
      <div id="shop-section">
        {currentItems.map((item) => {
          return (
            <Link to={`/shop/item/${item.title}`} key={item.title}>
              <Card
                title={item.title}
                src={item.src}
                price={`$${Number(item.price).toLocaleString('en-US')}`}
                description={item.description}
                brand={item.brand}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;