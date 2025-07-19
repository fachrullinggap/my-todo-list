"use client";

import { useState } from "react";

export default function ControlledForm() {
  //variable useState dalam bentuk array
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name: ", name, "value: ", value)
    // const name = e.target.name
    // const value = e.target.value
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.info("Proses validasi");

    console.info("Controlled Form Submitted: ", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold"> Controlled Register Form</h2>

      <label>First Name</label>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Masukkan nama depan"
      />

      <label>Last Name</label>
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Masukkan nama belakang (opsional)"
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Tuliskan email aktif anda"
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        placeholder="Tuliskan password anda"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
