import React, { useState } from "react";
import { Form, Input, Button, Select, Space } from "antd";

const BeerForm = ({ api, onAddBeer, beers }) => {
  // function BeerForm({ onAddBeer, api }) {
  // const [isChecked, setIsChecked] = useState(true);
  //   console.log(beers)
  //   const mappedCategories = beers.map(beer => {
  //     return (
  //         <Select.Option value={beer.category}> {beer.category} </Select.Option>
  //     )
  // })
  // console.log(mappedCategories)

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
    console.log(event.target.value);
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
    <>
    <h2 style={{textAlign:'center'}}>Find a delicious new beer? Share it with us!</h2>
    <Form
      className="beerForm"
      to="localhost.3000/thankyou"
      onFinish={handleSubmit}
      style={{margin: 'auto'}}
    >
      <Form.Item
        type="text"
        label="Beer Name"
        name="name"
        onChange={handleChange}
        value={formData.name}
        rules={[{ required: true, message: "hey dumbass" }]}
      >
        <Input style={{width: '85%'}} value={formData.name} required />
      </Form.Item>

      <Form.Item
        type="text"
        label="Brewery Name"
        name="brewery"
        onChange={handleChange}
        value={formData.brewery}
        rules={[{ required: true }]}
      >
        <Input style={{width: '85%'}}/>
      </Form.Item>
      <Form.Item
        type="text"
        label="Category"
        name="category"
        onChange={handleChange}
        value={formData.category}
        rules={[{ required: true }]}
      >
        <Input style={{width: '85%'}}/>
        {/* <Select onChange={handleChange} */}
        {/* {mappedCategories} */}
        {/* <Select.Option key="blank">-Select One-</Select.Option>
          <Select.Option  id='Stout' key="Stout">Stout</Select.Option>
          <Select.Option className="IPA">IPA</Select.Option>
          <Select.Option key="Gose">Gose</Select.Option>
          <Select.Option key="Sour">Sour/Wild Ale</Select.Option>
          <Select.Option key="Pilsner">Pilsner</Select.Option>
          <Select.Option key="Hefeweizen">Hefeweizen</Select.Option>
          <Select.Option key="Porter">Porter</Select.Option>
          <Select.Option key="Seasonal">Seasonal</Select.Option>
          <Select.Option key="Witbier">Witbier</Select.Option>
          <Select.Option key="Berliner">Berliner</Select.Option>
          <Select.Option key="Wheat">Wheat</Select.Option> */}

        {/* </Select> */}
      </Form.Item>
      <Form.Item
        type="text"
        label="Image"
        name="image"
        onChange={handleChange}
        value={formData.image}
        rules={[{ required: true }]}
      >
        <Input style={{width: '85%'}}/>
      </Form.Item>
      <Form.Item
        type="number"
        label="ABV"
        name="abv"
        onChange={handleChange}
        value={formData.abv}
        rules={[{ required: true }]}
      >
        <Input style={{width: '85%'}}/>
      </Form.Item>
      <Form.Item
        type="text"
        label="Region"
        name="region"
        onChange={handleChange}
        value={formData.region}
        rules={[{ required: true }]}
      >
        <Input style={{width: '85%'}}/>
      </Form.Item>
      <Form.Item
        type="text"
        label="Tasting Notes"
        name="notes"
        onChange={handleChange}
        value={formData.notes}
        rules={[{ required: true }]}
      >
        <Input style={{width: '85%'}}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <div className="space-align-block">
      <Space align="center">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Space>
        </div>
      </Form.Item>
    </Form>
</>
  );
};

export default BeerForm;
