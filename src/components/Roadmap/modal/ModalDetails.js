import React, { useContext } from "react";
import { ListOfLinks } from "../components/ListOfLinks";
import classes from "./ModalDetails.module.css";
import ModalContext from "./modalContext";

const ModalDetails = (props) => {
  const { hideModal } = useContext(ModalContext);
  const {
    title,
    description,
    distributionRequirements,
    credits,
    prerequisites,
    unlocks,
    technicalTopics,
    professionalTopics,
    tools,
    platform,
    learningObjectives,
    learningOutcomes,
  } = props.topicData;
  return (
    <div className={classes["modal__content"]}>
      <div className={classes["modal__header"]}>
        <div>
          <h2 className={classes["modal__title"]}>{title}</h2>
          {distributionRequirements.length !== 0 && (
            <p
              style={{
                fontWeight: 400,
                color: "#495057",
                marginTop: -15,
              }}
            >
              Distribition Requirements:{" "}
              {distributionRequirements[0] + " " + distributionRequirements[1]}
            </p>
          )}

          {credits.length !== 0 && (
            <p
              style={{
                fontWeight: 400,
                color: "#495057",
                marginTop: -10,
              }}
            >
              Credits: {credits}
            </p>
          )}
          <ul style={{ fontWeight: 400, color: "#495057" }}>
            {prerequisites.allof.map((req) => (
              <li key={req} style={{ marginTop: -10 }}>
                Take <span style={{ fontWeight: 800 }}>{req}</span> - Must be
                completed prior to taking this course.{" "}
              </li>
            ))}
            {prerequisites.allof.length !== 0 &&
              prerequisites.anyof.length !== 0 && (
                <li style={{ marginTop: -10 }}>
                  {prerequisites.anyof.join(" or ")} - Take one of these classes
                </li>
              )}
          </ul>
          {unlocks.length !== 0 && (
            <p style={{ fontWeight: 400, color: "#495057" }}>
              This course unlocks these classes: {unlocks.join(", ")}
            </p>
          )}
        </div>
        <button
          onClick={hideModal}
          type="button"
          aria-label="Close"
          className={classes["modal__close-ic"]}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 23L9 9"
              stroke="#868E96"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M23 9L9 23"
              stroke="#868E96"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={classes["modal__body"]}>
        <p className={classes["topic-description"]}>{description}</p>
        <ListOfLinks
          tools={tools}
          professionalTopics={professionalTopics}
          technicalTopics={technicalTopics}
        />
      </div>
      <footer className={classes["modal__footer"]}>
        <button
          onClick={hideModal}
          type="button"
          className={classes["modal__close-btn"]}
        >
          Close
        </button>
      </footer>
    </div>
  );
};

export default ModalDetails;
