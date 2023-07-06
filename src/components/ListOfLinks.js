import React from "react";

import { LinkToResource } from "./LinkToResource";
import classes from "./ListOfLinks.module.css";

export const ListOfLinks = (props) => {
  const { tools, professionalTopics, technicalTopics } = props;
  console.log(props);
  return (
    <div>
      <hr></hr>
      <div className={classes.resources}>
        <div>
          <h3>Tools</h3>
          <ul>
            {tools.map((tool) => {
              return (
                <li key={tool.title}>
                  <LinkToResource
                    icon={tool.iconType}
                    title={tool.title}
                    href={tool.href}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <h3>Technical Topics</h3>
          {technicalTopics.map((topic) => (
            <ul style={{ listStyleType: "circle" }}>
              <li>{topic}</li>
            </ul>
          ))}
          <h3>Professional Topics</h3>
          {professionalTopics.map((topic) => (
            <ul style={{ listStyleType: "circle" }}>
              <li>{topic}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
