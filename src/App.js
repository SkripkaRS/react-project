import "./App.css";
import Course from "./components/Course/Course.jsx";
import { CourseInfo, courses } from "./Types.ts";

function App(): React.FC {
  return (
    <div>
      <div className="course__container">
        {courses.map((item) => (
          <Course key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
