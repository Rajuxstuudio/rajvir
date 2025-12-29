import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

// Get Indian time and determine if it's day (6 AM - 6 PM)
const getIndianTimeOfDay = () => {
  const now = new Date();
  const indianTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const hours = indianTime.getHours();
  return hours >= 6 && hours < 18 ? "light" : "dark";
};

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set initial theme based on Indian time
  useEffect(() => {
    setMounted(true);
    if (!theme || theme === "system") {
      setTheme(getIndianTimeOfDay());
    }
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center">
        <Sun className="w-5 h-5 text-muted-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center",
        "hover:bg-muted hover:border-primary/30 transition-all duration-300"
      )}
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {resolvedTheme === "dark" ? (
        <Moon className="w-5 h-5 text-primary animate-scale-in" />
      ) : (
        <Sun className="w-5 h-5 text-primary animate-scale-in" />
      )}
    </button>
  );
};
