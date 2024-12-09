import { useTheme } from "./context";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
 
  return (

    <div className={`theme-container ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
 
      </div>
  )
}
 
export default ThemeToggle