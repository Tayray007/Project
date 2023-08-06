import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";


const QuickQuiz = () => {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
    setSelectedTopic("");
    setCurrentQuestionIndex(0);
    setSelectedChoices([]);
    setSubmitted(false);
    setScore(0);
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
    setCurrentQuestionIndex(0);
    setSelectedChoices([]);
    setSubmitted(false);
    setScore(0);
  };

  const handleChoiceChange = (event) => {
    const { value, name } = event.target;
    setSelectedChoices((prevChoices) => {
      const updatedChoices = [...prevChoices];
      updatedChoices[name] = value;
      return updatedChoices;
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmitQuiz = () => {
    let currentScore = 0;
    QuickQuizData.find((unit) => unit.id === selectedUnit)
      .topics.find((topic) => topic.id === selectedTopic)
      .questions.forEach((question, index) => {
        if (selectedChoices[index] === question.correctAnswer) {
          currentScore++;
        }
      });

    setScore(currentScore);
    setSubmitted(true);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      {/* Course Unit and Topic Selection */}
      <Box mb="20px">
        <FormControl>
          <InputLabel>Select Course Unit</InputLabel>
          <Select
            value={selectedUnit}
            onChange={handleUnitChange}
            style={{ minWidth: "200px" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {QuickQuizData.map((unit) => (
              <MenuItem key={unit.id} value={unit.id}>
                {unit.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {selectedUnit && (
        <Box mb="20px">
          <FormControl>
            <InputLabel>Select Topic</InputLabel>
            <Select
              value={selectedTopic}
              onChange={handleTopicChange}
              style={{ minWidth: "200px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {QuickQuizData.find((unit) => unit.id === selectedUnit).topics.map((topic) => (
                <MenuItem key={topic.id} value={topic.id}>
                  {topic.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      {/* Question Display */}
      {selectedTopic && !submitted && (
        <Box mb="20px" textAlign="center">
          <Typography variant="h6">Question {currentQuestionIndex + 1}:</Typography>
          <Typography>
            {QuickQuizData
              .find((unit) => unit.id === selectedUnit)
              .topics.find((topic) => topic.id === selectedTopic)
              .questions[currentQuestionIndex]?.content}
          </Typography>
        </Box>
      )}

      {/* Choices */}
      {selectedTopic && !submitted && (
        <Box mb="20px" textAlign="center">
          <Typography variant="h6">Select your answer:</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label={`choices-${currentQuestionIndex}`}
              name={`choices-${currentQuestionIndex}`}
              value={selectedChoices[currentQuestionIndex] || ""}
              onChange={handleChoiceChange}
            >
              {QuickQuizData
                .find((unit) => unit.id === selectedUnit)
                .topics.find((topic) => topic.id === selectedTopic)
                .questions[currentQuestionIndex]?.choices.map((choice, index) => (
                  <FormControlLabel
                    key={index}
                    value={choice}
                    control={<Radio />}
                    label={choice}
                  />
                ))}
            </RadioGroup>
          </FormControl>
        </Box>
      )}

      {/* Submit Button */}
      {selectedTopic && !submitted && (
        <Box textAlign="center">
          {currentQuestionIndex < QuickQuizData
            .find((unit) => unit.id === selectedUnit)
            .topics.find((topic) => topic.id === selectedTopic)
            .questions.length - 1 ? (
            <Button variant="contained" onClick={handleNextQuestion}>
              Next Question
            </Button>
          ) : (
            <Button variant="contained" onClick={handleSubmitQuiz}>
              Submit Quiz
            </Button>
          )}
        </Box>
      )}

      {/* Score Display */}
      {submitted && (
        <Box mb="20px" textAlign="center">
          <Typography variant="h6">Score: {score} / {QuickQuizData
            .find((unit) => unit.id === selectedUnit)
            .topics.find((topic) => topic.id === selectedTopic)
            .questions.length}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default QuickQuiz;
