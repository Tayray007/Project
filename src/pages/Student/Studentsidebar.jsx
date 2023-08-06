import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";



const Item = ({ title, path, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  
  return ( 
    <NavLink
      to={path}
      onClick={() => setSelected(title)}
      className="link"
      activeClassName="active"
    >
      <div className="icon">{icon}</div>
      <div className="link_text">{title}</div>
    </NavLink>
    
  );
};

const StuSidebar = ({ onQuestionBankClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .background-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      
      <div className="background-inner" collapsed={isCollapsed}>
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                GRADEX
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </div>

        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/images.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                John Wick
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                student
              </Typography>
            </Box>
          </Box>
        )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            path="student-dashboard"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            COURSE
          </Typography>
          <Item
            title="Quick Quiz"
            path="quick-quiz"
            icon={<QuizOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Question Bank"
            path="question-bank"
            onClick={() => onQuestionBankClick()}
            icon={<QuestionAnswerOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Course Units"
            path="course-units"
            icon={<SchoolOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Consultation"
            path="consultation"
            icon={<SchoolOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            PAGES
          </Typography>
          <Item
            title="Deadlines"
            path="deadlines"
            icon={<CrisisAlertOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            path="calendar"
            icon={<CalendarMonthOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ"
            path="faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </div>
      
    </Box>
  );
};

export default StuSidebar;
