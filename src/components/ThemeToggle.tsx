import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border/40 hover:bg-secondary/50 transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            ) : (
                <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            )}
        </button>
    );
};

export default ThemeToggle;
