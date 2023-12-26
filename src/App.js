import "./App.css";
import Counter from "./components/Counter/Counter";
import Course from "./components/Course/Course.jsx";
import { CourseInfo, courses } from "./Types.ts";

function App(): React.FC {
  return (
    <div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
