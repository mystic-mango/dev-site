"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as MuiTooltip } from '@mui/material'

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
      'var(--chart-1)',
      'var(--chart-2)',
      'var(--chart-3)',
      'var(--chart-4)'
    ],
    dark: [
      'var(--card)',
      'var(--chart-1)',
      'var(--chart-2)',
      'var(--chart-3)',
      'var(--chart-4)'
    ],
  };

  return (
    <div className=" overflow-auto scrollbar-hide">
      <GitHubCalendar
        username={GITHUB_USERNAME}
        theme={theme}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme={colorScheme}
        hideMonthLabels={false}
        hideColorLegend={false}
        year={"last"}
        labels={{
          // months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          // weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          totalCount: '{{count}} contributions this year',
        }}
        renderBlock={(block, activity) => (
          <MuiTooltip
            title={`${activity.count} activities on ${activity.date}`}
            arrow
            slotProps={{
              popper: {
                sx: {
                  '& .MuiTooltip-tooltip': {
                    background: 'var(--popover)',
                    color: 'var(--popover-foreground)',
                    border: '1px solid var(--border)',
                    fontSize: 13,
                    fontFamily: 'inherit',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.15)',
                  },
                  '& .MuiTooltip-arrow': {
                    color: 'var(--popover)',
                  },
                },
              },
            }}
          >
            {block}
          </MuiTooltip>
        )}
        renderColorLegend={(block, level) => (
          <MuiTooltip
            title={`Level: ${level}`}
            slotProps={{
              popper: {
                sx: {
                  '& .MuiTooltip-tooltip': {
                    background: 'var(--popover)',
                    color: 'var(--popover-foreground)',
                    border: '1px solid var(--border)',
                    fontSize: 13,
                    fontFamily: 'inherit',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.15)',
                  },
                  '& .MuiTooltip-arrow': {
                    color: 'var(--popover)',
                  },
                },
              },
            }}
          >
            {block}
          </MuiTooltip>
        )}
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