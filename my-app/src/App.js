import { ThemeProvider } from "./components/context";
import ThemeToggle from "./components/usecontext";

function App() {
  return (
    <div>
    <ThemeProvider>
    <ThemeToggle/>
    </ThemeProvider>
      
    </div>
  )
}

export default App;
