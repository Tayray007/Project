import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import FAQ from '../pages/Faq';
import Analysis from '../pages/Lecturer/Analysis';
import ConsultationHandler from '../pages/Lecturer/Consultation';
import Course from '../pages/Lecturer/Course';
import LecturerDashboard from '../pages/Lecturer/Dashboard/LecturerDashboard';
import Progress from '../pages/Lecturer/Progress';
import Consultation from '../pages/Student/Consultation';
import CourseUnits from '../pages/Student/CourseUnits';
import Deadlines from '../pages/Student/Deadlines';
import QuestionBank from '../components/QuestionBank';
import QuickQuiz from '../pages/Student/QuickQuiz';
import StudentDashboard from '../pages/Student/Dashboard/StudentDashboard';
import StuAppLayout from './StuAppLayout';

const PageContent = () => {
  return (
    <div>
      <Routes>
      <Route path="/student-layout/*" element={<StuAppLayout />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/consultation-handler" element={<ConsultationHandler />} />
        <Route path="/course" element={<Course />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/course-units" element={<CourseUnits />} />
        <Route path="/deadlines" element={<Deadlines />} />
        <Route path="/question-bank" element={<QuestionBank />} />
        <Route path="/quick-quiz" element={<QuickQuiz />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
};

export default PageContent;
