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

  // Define theme with both light and dark variants using CSS variables from globals.css
  const theme = {
    light: [
      'var(--card)',
      'var(--accent)',
      'var(--primary)',
      'var(--chart-4)',
      'var(--chart-5)'
    ],
    dark: [
      'var(--card)',
      'var(--accent)',
      'var(--primary)',
      'var(--chart-4)',
      'var(--chart-5)'
    ],
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