import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    user_type: "",
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace 'your_api_endpoint' with your Django API endpoint for user registration
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/signup",
        formData
      );
      console.log(response.data); // You can handle the response accordingly
      // Redirect to another page or show a success message
    } catch (error) {
      console.error(error.response.data); // Handle error responses
      // Display an error message to the user
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor={colors.background} // Use the theme context to set the background color
    >
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        onSubmit={handleSubmit}
        width="35%" // Set the card width to 35% of the screen width
        border="1px solid" // Add border to the card
        borderRadius={8} // Optional: Add border radius to the card
        p={4} // Add some padding around the card
      >
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="User Type"
          variant="outlined"
          margin="normal"
          name="user_type"
          value={formData.user_type}
          onChange={handleChange}
          InputProps={{
            style: { border: 0 }, // Remove the border from the input field
          }}
        />
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          InputProps={{
            style: { border: 0 }, // Remove the border from the input field
          }}
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          InputProps={{
            style: { border: 0 }, // Remove the border from the input field
          }}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          name="password"
          value={formData.password}
          onChange={handleChange}
          InputProps={{
            style: { border: 0 }, // Remove the border from the input field
          }}
        />
        <TextField
          type="password"
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          InputProps={{
            style: { border: 0 }, // Remove the border from the input field
          }}
        />
        <Button type="submit" variant="contained" color="primary" size="large" marginY={2}>
          Sign Up
        </Button>
        <Link href="/login" variant="body2">
          I already have an account
        </Link>
      </Box>
    </Box>
  );
};

export default SignUpForm;
