"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

// GitHub username - replace with actual GitHub username
const GITHUB_USERNAME = "mystic-mango";

export function ContributionCalendar() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initialize theme based on document class
    const isDarkMode = document.documentElement.classList.contains("dark");
    setColorScheme(isDarkMode ? "dark" : "light");

    // Set up observer for theme changes
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setColorScheme(isDarkMode ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Define theme with both light and dark variants
  const theme = {
    light: ['#f0f0f0', '#fff4c8', '#ffd95a', '#ff9b54', '#ff5768'],
    dark: ['#161b22', '#2c1c2c', '#512940', '#b24592', '#f15f79'],
  };

  return (
    <div className="mt-4 overflow-auto scrollbar-hide">
      <GitHubCalendar
        username={GITHUB_USERNAME}
        theme={theme}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme={colorScheme}
        hideMonthLabels={false}
        hideColorLegend={true}
        labels={{
          months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          totalCount: '{{count}} contributions this year',
        }}
      />
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
} 