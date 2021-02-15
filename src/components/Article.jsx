import React from "react";
import moment from "moment";

const Article = ({ team, score, position, date, caption, rival }) => {
  return (
    <article>
      <div className="posts">
        <h3>
          {team} vs {rival}
        </h3>
        <h4>{moment(date).format("MMMM Do YYYY")}</h4>
        <h4>Result: {score}</h4>
        <h4>ranking: {position}</h4>
        <p>{caption}</p>
      </div>
    </article>
  );
};

export default Article;
