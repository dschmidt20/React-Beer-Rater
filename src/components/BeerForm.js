import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";

const BeerForm = ({ api, onAddBeer, beers }) => {
  // function BeerForm({ onAddBeer, api }) {
    // const [isChecked, setIsChecked] = useState(true);
//   console.log('Beers: ', beers)

//   const mappedCategories = beers.map(beer => {
//     return (
//       console.log(beer.category)
//         // <Select.Option key={beer.id} value={beer.category}> {beer.category} </Select.Option>
//     )
// })
// console.log('Mapped Categories: ', mappedCategories)

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
    console.log('TEST: ', event, event.target.value);
    setFormData({
      ...formData,
      [event]: event,
    });
  }

  function handleSubmit() {
    // event.preventDefault();

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
    window.location.pathname = "/thanks";
  }

  //   return (
  //     <div>
  //       <h1>Add New Beer!</h1>
  //       <div className="formHolder">
  //       <form className="beerForm" to='localhost.3000/thankyou'>
  //         <label>
  //           <input
  //             type="text"
  //             placeholder="Beer Name"
  //             name="name"
  //             onChange={handleChange}
  //             value={formData.name}
  //             required={true}
  //             />
  //         </label>

  //         <br />
  //         <label>
  //           <input
  //             type="text"
  //             placeholder="Brewery Name"
  //             name="brewery"
  //             onChange={handleChange}
  //             value={formData.brewery}
  //             rules={[{required: true}]}
  //             />
  //         </label>
  //         <br />
  //         <label>
  //           Beer Type
  //           <select name="category" onChange={handleChange}>
  //             <option value="blank">-Select One-</option>
  //             <option value="Stout">Stout</option>
  //             <option value="IPA">IPA</option>
  //             <option value="Gose">Gose</option>
  //             <option value="Sour">Sour/Wild Ale</option>
  //             <option value="Pilsner">Pilsner</option>
  //             <option value="Hefeweizen">Hefeweizen</option>
  //             <option value="Porter">Porter</option>
  //             <option value="Seasonal">Seasonal</option>
  //             <option value="Witbier">Witbier</option>
  //             <option value="Berliner">Berliner</option>
  //             <option value="Wheat">Wheat</option>
  //           </select>
  //         </label>
  //         <br />
  //         <label>
  //           <input
  //             type="text"
  //             placeholder="Image"
  //             name="image"
  //             onChange={handleChange}
  //             value={formData.image}
  //             required
  //             />
  //         </label>
  //         <br />
  //         <label>
  //           <input
  //             type="number"
  //             placeholder="ABV"
  //             name="abv"
  //             onChange={handleChange}
  //             value={formData.abv}
  //             required
  //             />
  //         </label>
  //         <br />
  //         <label>
  //           <input
  //             type="text"
  //             placeholder="Region"
  //             name="region"
  //             onChange={handleChange}
  //             value={formData.region}
  //             required
  //             />
  //         </label>
  //         <br />
  //         <label>
  //           <input
  //             type="text"
  //             placeholder="Tasting Notes"
  //             name="notes"
  //             onChange={handleChange}
  //             value={formData.notes}
  //             required
  //             />
  //         </label>
  //         <br />
  //         {/* <label>
  //           Favorite?
  //           <input type="checkbox" name="favorite" value={isChecked} onChange={handleChange} />
  //         </label> */}
  //         <input type="submit" onClick={handleSubmit}></input>
  //       </form>
  //         </div>
  //     </div>
  //   );
  // }
  //

  return (
    <Form
      className="beerForm"
      to="localhost.3000/thankyou"
      onFinish={handleSubmit}
    >
      <Form.Item
        type="text"
        label="Beer Name"
        name="name"
        onChange={handleChange}
        value={formData.name}
        rules={[{ required: true, message: "hey dumbass" }]}
      >
        <Input value={formData.name}
 required />
      </Form.Item>

      <Form.Item
        type="text"
        label="Brewery Name"
        name="brewery"
        onChange={handleChange}
        value={formData.brewery}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Category">
        <Select onChange={(e) => handleChange(e)}>
          {/* {mappedCategories} */}

          <Select.Option key="blank">-Select One-</Select.Option>
          <Select.Option value='Stout' key="Stout">Stout</Select.Option>
          <Select.Option value='IPA' className="IPA">IPA</Select.Option>
          <Select.Option value='Gose' key="Gose">Gose</Select.Option>
          <Select.Option value='Sour' key="Sour">Sour/Wild Ale</Select.Option>
          <Select.Option value='Pilsner' key="Pilsner">Pilsner</Select.Option>
          <Select.Option value='Hefeweizen' key="Hefeweizen">Hefeweizen</Select.Option>
          <Select.Option value='Porter' key="Porter">Porter</Select.Option>
          <Select.Option value='Seasonal' key="Seasonal">Seasonal</Select.Option>
          <Select.Option value='Witbier' key="Witbier">Witbier</Select.Option>
          <Select.Option value='Berliner' key="Berliner">Berliner</Select.Option>
          <Select.Option value='Wheat' key="Wheat">Wheat</Select.Option>

        </Select>
      </Form.Item>
      <Form.Item
        type="text"
        label="Image"
        name="image"
        onChange={handleChange}
        value={formData.image}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        type="number"
        label="ABV"
        name="abv"
        onChange={handleChange}
        value={formData.abv}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        type="text"
        label="Region"
        name="region"
        onChange={handleChange}
        value={formData.region}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        type="text"
        label="Tasting Notes"
        name="notes"
        onChange={handleChange}
        value={formData.notes}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BeerForm;
