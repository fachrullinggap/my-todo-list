"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

export default function Home() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "admin", // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Success: ${data.message}`);
      } else {
        alert(`Error: ${data.data}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while registering the user.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 400,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" textAlign="center">
          Register
        </Typography>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          fullWidth
          required
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          select
          label="Role"
          name="role"
          variant="outlined"
          fullWidth
          required
          value={formData.role}
          onChange={handleChange}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Register
        </Button>
      </Box>
    </div>
  );
}