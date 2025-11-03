import { useState } from "react";

const SellPage = () => {
  const [form, setform] = useState({
    Breed: "",
    Age: "",
    Location: "",
    Contact: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{const response = await fetch("http://localhost:3000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if(response.ok){
      alert("Uploaded perfectly")
    }
    else{
      alert("Data is not uploaded")
    }
  }
  catch(err){
    alert("something went wront",)

  }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="Breed"
          placeholder="Breed"
          value={form.Breed}
          onChange={handleChange}
          required
        />
        <input
          name="Age"
          type="number"
          placeholder="Age"
          value={form.Age}
          onChange={handleChange}
          required
        />
        <input
          name="Location"
          placeholder="Location"
          value={form.Location}
          onChange={handleChange}
          required
        />
        <input
          name="Contact"
          placeholder="Contact"
          value={form.Contact}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellPage;
