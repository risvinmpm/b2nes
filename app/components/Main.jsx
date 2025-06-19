"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import WhyChoose from "./whychoose/WhyChoose";
import Features from "./features/Features";
import Advantage from "./advantage/Advantage";
import Success from "./success-stories/Success";
import Connect from "./connect/Connect";
import Footer from "./footer/Footer";
// Lazy load the heavy animation component
// const SplashCursor = dynamic(
//   () => import("./animations/splashcursor/SplashCursor"),
//   {
//     ssr: false, // Disable server-side rendering for this component
//     loading: () => null, // No loading spinner needed
//   }
// );

// Loading component
const PageLoader = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Skeleton loader for sections
const SectionSkeleton = ({ height = "h-64" }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${height} mb-8`}></div>
);

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadAnimations, setLoadAnimations] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState({
    banner: false,
    whyChoose: false,
    features: false,
    advantage: false,
    success: false,
    connect: false,
  });

  useEffect(() => {
    // Simulate initial loading time and prioritize critical content
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Load animations after critical content is rendered
      setTimeout(() => {
        setLoadAnimations(true);
      }, 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Progressive loading of components
  useEffect(() => {
    const loadComponent = (componentName, delay) => {
      setTimeout(() => {
        setComponentsLoaded(prev => ({
          ...prev,
          [componentName]: true
        }));
      }, delay);
    };

    if (!isLoading) {
      // Load components progressively with staggered delays
      loadComponent('banner', 100);
      loadComponent('whyChoose', 300);
      loadComponent('features', 500);
      loadComponent('advantage', 700);
      loadComponent('success', 900);
      loadComponent('connect', 1100);
    }
  }, [isLoading]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div>
{/* Load SplashCursor only after critical content is loaded */}
      {/* {loadAnimations && (
        <Suspense fallback={null}>
          <SplashCursor />
        </Suspense>
      )} */}
      <Navbar />
      
      {/* Progressive loading with fade-in animations */}
      <div className={`transition-opacity duration-500 ${componentsLoaded.banner ? 'opacity-100' : 'opacity-0'}`}>
        {componentsLoaded.banner ? <Banner /> : <SectionSkeleton height="h-96" />}
      </div>
      
      <div className={`transition-opacity duration-500 ${componentsLoaded.whyChoose ? 'opacity-100' : 'opacity-0'}`}>
        {componentsLoaded.whyChoose ? <WhyChoose /> : <SectionSkeleton />}
      </div>
      
      <div className={`transition-opacity duration-500 ${componentsLoaded.features ? 'opacity-100' : 'opacity-0'}`}>
        {componentsLoaded.features ? <Features /> : <SectionSkeleton />}
      </div>
      
       <div className={`transition-opacity duration-500 ${componentsLoaded.advantage ? 'opacity-100' : 'opacity-0'}`}>
        {componentsLoaded.advantage ? <Advantage /> : <SectionSkeleton />}
      </div>
      
      <div className={`transition-opacity duration-500 ${componentsLoaded.success ? 'opacity-100' : 'opacity-0'}`}>
        {componentsLoaded.success ? <Success /> : <SectionSkeleton />}
      </div>
      
      <div className={`transition-opacity duration-500 ${componentsLoaded.connect ? 'opacity-100' : 'opacity-0'}`}>
        {componentsLoaded.connect ? <Connect /> : <SectionSkeleton />}
      </div>
      
      <Footer />
    </div>
  );
};

export default Main;