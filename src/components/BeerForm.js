import React, { useState } from "react";

function BeerForm({ onAddBeer, api }) {
    const [isChecked, setIsChecked] = useState(true);
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
  }

  return (
    <>
      <h1>Add New Beer!</h1>
      <form>
        <label>
          Beer Name:
          <input type="text" name="name" onChange={handleChange} value={formData.name} />
        </label>
        <br />
        <label>
          Brewery Name:
          <input type="text" name="brewery" onChange={handleChange} value={formData.brewery} />
        </label>
        <br />
        <label>
          Beer Type:
          <select name='category' onChange={handleChange}>
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
          Image:
          <input type="text" name="image" onChange={handleChange} value={formData.image} />
        </label>
        <br />
        <label>
          ABV:
          <input type="text" name="abv" onChange={handleChange} value={formData.abv} />
        </label>
        <br />
        <label>
          Region:
          <input type="text" name="region" onChange={handleChange} value={formData.region} />
        </label>
        <br />
        <label>
          Tasting Notes:
          <input type="text" name="notes" onChange={handleChange} value={formData.notes} />
        </label>
        <br />
        <label>
          Favorite?
          <input type="checkbox" name="favorite" value={isChecked} onChange={handleChange} />
        </label>
        <input type='submit' onClick={handleSubmit}></input>
      </form>
    </>
  );
}

export default BeerForm;
