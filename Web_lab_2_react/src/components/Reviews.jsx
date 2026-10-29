import React, { useState, useEffect } from "react";
import { componentStyles } from "./componentStyles";
function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/6/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  return (
    <section className={componentStyles.section}>
      <h2 className={componentStyles.h2}>Коментарі роботодавців</h2>
      <div id="comments-container">
        {comments.map((comment) => (
          <div key={comment.id}>
            <strong className="text-slate-900 dark:text-slate-100 text-lg font-strong ">
              {comment.name}
            </strong>
            <div className="text-xl text-emerald-700 dark:text-emerald-300  italic">
              {comment.email}
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-lg font-medium mb-5">
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Reviews;
