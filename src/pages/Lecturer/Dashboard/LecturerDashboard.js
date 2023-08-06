import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../../components/Header";


const LecturerDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" ml={isCollapsed => (isCollapsed ? "48px" : "240px")}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="LECTURERS DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={isCollapsed => (isCollapsed ? "48px 1fr" : "repeat(12, 1fr)")}
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 (Same as before) */}
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 1" : "span 3")}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* StatBox content here */}
        </Box>
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 1" : "span 3")}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* StatBox content here */}
        </Box>
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 1" : "span 3")}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* StatBox content here */}
        </Box>
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 1" : "span 3")}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* StatBox content here */}
        </Box>

        {/* ROW 2 (Same as before) */}
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 48" : "span 8")}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* LineChart content here */}
        </Box>
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 48" : "span 4")}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          {/* Recent Transactions content here */}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 48" : "span 3")}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Milestones
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <h4>ProgressCircle</h4>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 48" : "span 3")}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Courses
          </Typography>
          <Box height="250px" mt="-20px">
            <h4>BarChart</h4>
          </Box>
        </Box>
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 48" : "span 3")}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Consultation
          </Typography>
          <Box height="200px"></Box>
        </Box>
        <Box
          gridColumn={isCollapsed => (isCollapsed ? "span 48" : "span 3")}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px", padding: "30px 30px 0 30px" }}
          >
            Performance
          </Typography>
          <Box height="250px" mt="-20px">
            {/* Add Performance Chart component here */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LecturerDashboard;
