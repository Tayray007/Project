import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {tokens} from '../../theme';
import {IconButton} from "@mui/material";
import { Typography, useTheme, styled } from "@mui/material"; // Make sure to include `styled` here
import {
  HomeOutlined as HomeOutlinedIcon,
  SchoolOutlined as SchoolOutlinedIcon,
  MovingOutlined as MovingOutlinedIcon,
  AnalyticsOutlined as AnalyticsOutlinedIcon,
  CrisisAlertOutlined as CrisisAlertOutlinedIcon,
  CalendarMonthOutlined as CalendarMonthOutlinedIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
} from "@mui/icons-material";

const StyledDiv = styled("div")`
  color: ${({ theme }) => theme.colors.grey[100]};
`;

const Item = ({ title, path, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <NavLink
      to={path}
      onClick={() => setSelected(title)}
      className={selected === title ? "active" : "link"}
    >
      <div className="icon">{icon}</div>
      <div className="link_text">{title}</div>
    </NavLink>
  );
};

const LecSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div
      className="pro-sidebar-inner"
      style={{
        background: `${colors.primary[400]} !important`,
        zIndex: 1,
      }}
    >
      <div
        className="hoverable-icon"
        collapsed={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div
          className="background-inner"
          style={{
            background: `${colors.primary[400]} !important`,
          }}
        >
          <div
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: "15px",
                }}
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  GRADEX
                </Typography>
                <div>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            )}
          </div>

          {!isCollapsed && (
            <div style={{ marginBottom: "25px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  style={{ margin: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </div>
            </div>
          )}

          <div style={{ paddingLeft: isCollapsed ? undefined : "10%" }}>
            <Item
              title="Dashboard"
              path="lecturer-dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              style={{ margin: "15px 0 5px 20px" }}
            >
              COURSE
            </Typography>
            <Item
              title="Course"
              path="course"
              icon={<SchoolOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Progress"
              path="progress"
              icon={<MovingOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Analysis"
              path="analysis"
              icon={<AnalyticsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Consultation"
              path="consultation"
              icon={<CrisisAlertOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              style={{ margin: "15px 0 5px 20px" }}
            >
              PAGES
            </Typography>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecSidebar;
