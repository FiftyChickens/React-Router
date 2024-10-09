import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio,
        accusamus molestias magnam inventore at nobis ea, eum optio
        exercitationem quidem vitae? Voluptas architecto libero accusamus labore
        quis sequi illum.
      </p>
      <p>
        Go to the <Link to="/">HomePage</Link>.
      </p>
    </div>
  );
};

export default NotFound;
