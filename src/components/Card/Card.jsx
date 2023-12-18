import styles from "./styles.css";
import { Course } from "../../App";

const getTime = (duration) => {
  return `${Math.floor(duration / 3600)}h ${Math.floor(
    (duration % 3600) / 60,
  )}m`;
};

const getProgress = (finishedModules, modules) => {
  return (finishedModules / modules) * 100;
};

interface MyComponentProps {
  cources: Course[];
}

const Card: React.FC<MyComponentProps> = ({ cources }) => {
  return (
    <div className="card__container">
      {cources.map(
        ({
          id,
          image,
          level,
          title,
          user,
          rating,
          students,
          modules,
          duration,
          finishedModules,
        }) => (
          <div className="card" key={id}>
            <div className="image__container">
              <img src={image} alt="" />
              <div className="level">{level}</div>
            </div>
            <h3 className="card__title">{title}</h3>

            <div className="card__info">
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
            <div className="card__info">
              <p>{getProgress(finishedModules, modules)}</p>
              <div>{getProgress(finishedModules, modules)}%</div>
            </div>
            <div className="card__info">
              <div>{students} Student</div>
              <div>{modules} Modules</div>
              <div>{getTime(duration)}</div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Card;
