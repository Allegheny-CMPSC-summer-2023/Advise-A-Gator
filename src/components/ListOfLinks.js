import React from "react";

import { LinkToResource } from "./LinkToResource";
import classes from "./ListOfLinks.module.css";

export const ListOfLinks = (props) => {
  const { tools } = props;
  return (
    <div className={classes.resources}>
      <hr></hr>
      <h3>Topics / Tools</h3>
      <ul>
        {tools.map((tool) => {
          return (
            <li key={tool.href}>
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
  );
};
