import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BeerForm({ onAddBeer, api }) {
  // const [isChecked, setIsChecked] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    brewery: "",
    category: "",
    image: "",
    abv: "",
    region: "",
    notes: "",
    votes: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const newBeer = {
      ...formData,
    };

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBeer),
    })
      .then((r) => r.json())
      .then(onAddBeer);
      window.location.pathname = '/thanks'
  }

  const history = useHistory()
  console.log(history)

  return (
    <div>
      <h1>Add New Beer!</h1>
      <div className="formHolder">
      <form className="beerForm" to='localhost.3000/thankyou'>
        <label>
          <input
            type="text"
            placeholder="Beer Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required={true}
            />
        </label>
            
        <br />
        <label>
          <input
            type="text"
            placeholder="Brewery Name"
            name="brewery"
            onChange={handleChange}
            value={formData.brewery}
            required
            />
        </label>
        <br />
        <label>
          Beer Type
          <select name="category" onChange={handleChange}>
            <option value="blank">-Select One-</option>
            <option value="Stout">Stout</option>
            <option value="IPA">IPA</option>
            <option value="Gose">Gose</option>
            <option value="Sour">Sour/Wild Ale</option>
            <option value="Pilsner">Pilsner</option>
            <option value="Hefeweizen">Hefeweizen</option>
            <option value="Porter">Porter</option>
            <option value="Seasonal">Seasonal</option>
            <option value="Witbier">Witbier</option>
            <option value="Berliner">Berliner</option>
            <option value="Wheat">Wheat</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={formData.image}
            required
            />
        </label>
        <br />
        <label>
          <input
            type="number"
            placeholder="ABV"
            name="abv"
            onChange={handleChange}
            value={formData.abv}
            required
            />
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="Region"
            name="region"
            onChange={handleChange}
            value={formData.region}
            required
            />
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="Tasting Notes"
            name="notes"
            onChange={handleChange}
            value={formData.notes}
            required
            />
        </label>
        <br />
        {/* <label>
          Favorite?
          <input type="checkbox" name="favorite" value={isChecked} onChange={handleChange} />
        </label> */}
        <input type="submit" onClick={handleSubmit}></input>
      </form>
        </div>
    </div>
  );
}

export default BeerForm;
