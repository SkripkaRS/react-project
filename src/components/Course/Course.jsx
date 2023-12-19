import Styles from "./Styles.css";
import { CourseInfo } from "../../App";

interface MyComponentProps {
  data: Course[];
}

const getTime = (duration) => {
  return `${Math.floor(duration / 3600)}h ${Math.floor(
    (duration % 3600) / 60,
  )}m`;
};

const getProgress = (finishedModules, modules) => {
  return (finishedModules / modules) * 100;
};

const Course: React.FC<MyComponentProps> = ({ data }) => {
  const {
    id,
    image,
    level,
    title,
    user,
    rating,
    finishedModules,
    modules,
    students,
    duration,
  } = data;

  return (
    <div className="course__container">
      <div className="course" key={id}>
        <div className="image__container">
          <img src={image} alt="" />
          <div className="level">{level}</div>
        </div>
        <h3 className="course__title">{title}</h3>

        <div className="course__info">
          <div className="user">
            <img src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
          </div>
          <div className="rating">
            <p>{rating}</p>
          </div>
        </div>
        <progress
          value={getProgress(finishedModules, modules)}
          max="100"></progress>
        <div className="course__info">
          <p>{getProgress(finishedModules, modules)}</p>
          <div>{getProgress(finishedModules, modules)}%</div>
        </div>
        <div className="course__info">
          <div>{students} Student</div>
          <div>{modules} Modules</div>
          <div>{getTime(duration)}</div>
        </div>
      </div>
    </div>
  );
};

export default Course;
