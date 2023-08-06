import React, { useState } from "react";
import { Box, Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import axios from "axios";

const TopBar = ({ onSubmitForm }) => {
  const [courseUnit, setCourseUnit] = useState("");
  const [topic, setTopic] = useState("");

  const courseUnits = ["INFORMATION SECURITY AND RISK MANAGEMENT", "APPLIED BUSINESS STATISTICS"];

  const topics = {
    "INFORMATION SECURITY AND RISK MANAGEMENT": ["Applied encryption", "Network security"],
    "APPLIED BUSINESS STATISTICS": ["Probability", "Hypothesis testing"],
  };

  const handleSubmit = () => {
    // Call the parent component's onSubmitForm function with the selected course unit and topic
    onSubmitForm(courseUnit, topic);
  };

  return (
    <Box>
      {/* Add your form components here */}
      <Select
        label="Course Unit"
        value={courseUnit}
        onChange={(e) => setCourseUnit(e.target.value)}
      >
        {courseUnits.map((unit) => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </Select>
      {courseUnit && (
        <Select
          label="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          {topics[courseUnit].map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </Select>
      )}
      <Button color="primary" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

const QuestionBank = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [grade, setGrade] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmitForm = async (courseUnit, topic) => {
    // Get the access token from local storage
    const accessToken = localStorage.getItem("accessToken");

    // Create the request headers with the access token and "Content-Type"
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json", // Add this line to include "Content-Type" header
    };

    // Send a request to the backend to get the question
    try {
      const response = await axios.post(
        "http://127.0.0.2:8000/api/questions/generate_question/",
        { course_unit: courseUnit, topic },
        { headers }
      );

      setQuestion(response.data.question_text);
      setAnswer(""); // Clear the previous answer when a new question is received
    } catch (error) {
      // Handle error
    }
  };

  const handleSubmitAnswer = async () => {
    // Get the access token from local storage
    const accessToken = localStorage.getItem("accessToken");

    // Create the request headers with the access token and "Content-Type"
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    // Send a request to the backend to grade the answer
    try {
      const response = await axios.post(
        "http://127.0.0.2:8000/api/answers/grade_answer/",
        { answer: answer, question: question }, // Send "answer" and "question" as JSON data
        { headers }
      );

      setGrade(response.data.score); // Use "score" instead of "grade"
      setComment(response.data.comment);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Box>
      <Typography variant="h4">Question Bank</Typography>
      {/* TopBar with the button to trigger the form */}
      <TopBar onSubmitForm={handleSubmitForm} />
      {/* Display the question */}
      {question && (
        <Box>
          <Typography variant="h5">Question:</Typography>
          <Typography>{question}</Typography>
          {/* Text field for submitting the answer */}
          <TextField
            label="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button onClick={handleSubmitAnswer}>Submit Answer</Button>
        </Box>
      )}
      {/* Display the grade and comment */}
      {grade && (
        <Box>
          <Typography variant="h6">Grade: {grade}</Typography>
          <Typography>Comment: {comment}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default QuestionBank;
