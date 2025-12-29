import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { WelcomePage } from './pages/WelcomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { OnboardingWelcome } from './pages/OnboardingWelcome';
import { OnboardingPurpose } from './pages/OnboardingPurpose';
import { OnboardingTime } from './pages/OnboardingTime';
import { HomePage } from './pages/HomePage';
import { MeditatePage } from './pages/MeditatePage';
import { SleepPage } from './pages/SleepPage';
import { SleepWelcomePage } from './pages/SleepWelcomePage';
import { MusicPlayerPage } from './pages/MusicPlayerPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
export function App() {
  return <BrowserRouter>
      <div className="max-w-md mx-auto bg-white min-h-screen relative overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/onboarding/welcome" element={<OnboardingWelcome />} />
            <Route path="/onboarding/purpose" element={<OnboardingPurpose />} />
            <Route path="/onboarding/time" element={<OnboardingTime />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/meditate" element={<MeditatePage />} />
            <Route path="/sleep" element={<SleepPage />} />
            <Route path="/sleep-welcome" element={<SleepWelcomePage />} />
            <Route path="/music" element={<MusicPlayerPage />} />
            <Route path="/course-detail" element={<CourseDetailPage />} />
            <Route path="/profile" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>;
}