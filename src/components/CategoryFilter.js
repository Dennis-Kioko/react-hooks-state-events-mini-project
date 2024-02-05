import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setFilteredTasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFiteredTasks(category) {
    const filteredTasks =
      category === "All"
        ? tasks
        : tasks.filter((task) => task.category === category);
    setFilteredTasks(filteredTasks);
    setSelectedCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        /* render <button> elements for each category here */
        categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFiteredTasks(category)}
            className={`category ${
              category === selectedCategory ? "selected" : ""
            }`}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
}

export default CategoryFilter;
