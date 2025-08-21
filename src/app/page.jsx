"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, Link } from "@mui/material";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Success: ${data.message}\n${JSON.stringify(data.data)}`);
      } else {
        alert(`Error: ${data.message}\n${JSON.stringify(data.data)}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in.");
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
          Login
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Login
        </Button>
        <Typography variant="body2" textAlign="center">
          <Link href="/register" underline="hover">
            Register User
          </Link>
        </Typography>
      </Box>
    </div>
  );
}