import { useEffect, useState } from 'react';
import './FilterBar.css'

function FilterBar({products, setFilteredProducts}) {

    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState(''); 

    
    const filterProducts = () => {
        // console.log("filter product fonk çalıştı")
        let filtered = products;
        // console.log(filtered)
    
        if (selectedGender) {
            filtered = filtered.filter(product => product.category === selectedGender);
        }

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product => selectedCategories.includes(product.category));
        }

        if (minPrice) {
            filtered = filtered.filter(product => product.price >= parseFloat(minPrice));
        }

        if (maxPrice) {
            filtered = filtered.filter(product => product.price <= parseFloat(maxPrice));
        }
        
        // console.log(filtered)


        setFilteredProducts(filtered)
    }

    const handleApplyFilter = () => {
        // console.log("apply filter butonuna tıklandı")
        // console.log(selectedGender)
        filterProducts();
    }

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevCategories =>
            prevCategories.includes(category)
                ? prevCategories.filter(c => c !== category)
                : [...prevCategories, category]
        );
    };

    const handleClearFilter = () => {
        setSelectedGender('');
        setSelectedCategories([]);
        setMinPrice('');
        setMaxPrice('');
        setFilteredProducts(products);
    };

 
  return (
    <div className="filter-section">
        <h3>Filter by Gender</h3>
        <label>
            <input 
            type="radio" 
            name="gender" 
            value="men'clothing" 
            checked={selectedGender === "men's clothing"} 
            onChange={() => setSelectedGender("men's clothing")}
            /> 
            Men
        </label>
        <label>
            <input 
            type="radio" 
            name="gender" 
            value="women's clothing"
            checked={selectedGender === "women's clothing"}
            onChange={() => setSelectedGender("women's clothing")}
            /> 
            Women
        </label>

        <h3>Filter by Category</h3>
        <label>
            <input 
            type="checkbox" 
            name="category" 
            value="men's clothing" 
            checked={selectedCategories.includes("men's clothing")}
            onChange={() => handleCategoryChange("men's clothing")}
            /> 
            Men's Clothing
        </label>
        <label>
            <input 
            type="checkbox" 
            name="category" 
            value="jewelery" 
            checked={selectedCategories.includes("jewelery")}
            onChange={() => handleCategoryChange("jewelery")}
            /> 
            Jewelery
        </label>
        <label>
            <input 
            type="checkbox" 
            name="category" 
            value="electronics" 
            checked={selectedCategories.includes("electronics")}
            onChange={() => handleCategoryChange("electronics")}
            /> 
            Electronics
        </label>
        <label>
            <input 
            type="checkbox" 
            name="category" 
            value="women's clothing"
            checked={selectedCategories.includes("women's clothing")}
            onChange={() => handleCategoryChange("women's clothing")} 
            /> 
            Women's Clothing

        </label>

        <h3>Filter by Price Range</h3>
        <label>
            Min Price: <input type="number" id="min-price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="0" />
        </label>
        <label>
            Max Price: <input type="number" id="max-price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="500" />
        </label>
        <div className="filter-buttons">
            <button className="apply-button" id="apply-filters" onClick={handleApplyFilter}>Apply Filters</button>
            <button className="clear-button" id="clear-filters" onClick={handleClearFilter}>Clear</button>
        </div>
    </div>
  )
}

export default FilterBar