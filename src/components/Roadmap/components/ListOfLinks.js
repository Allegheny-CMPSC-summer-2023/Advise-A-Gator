import React from "react";

import { LinkToResource } from "./LinkToResource";
import classes from "./ListOfLinks.module.css";

export const ListOfLinks = (props) => {
  const { tools, professionalTopics, technicalTopics } = props;
  return (
    <div>
      <hr></hr>
      <div className={classes.resources}>
        {tools.length !== 0 && (
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
        )}

        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          {technicalTopics.length !== 0 && (
            <div>
              <h3>Technical Topics</h3>
              <ul style={{ listStyleType: "circle" }}>
                {technicalTopics.map((topic) => (
                  <li
                    key={topic}
                    style={{
                      marginTop: "1em",
                      marginRight: 0,
                      marginBottom: "1em",
                      marginLeft: 0,
                    }}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {professionalTopics.length !== 0 && (
            <div>
              <h3>Professional Topics</h3>
              <ul style={{ listStyleType: "circle" }}>
                {professionalTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
