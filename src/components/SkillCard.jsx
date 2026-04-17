import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

const SkillCard = ({icon: Icon, color, name}) => {
  return (
    <div className="icons-card">
      <Icon className={`icons-styles ${color} `}></Icon>
          <p className="icons-text-styles">{ name }</p>
    </div>
  );
};

export default SkillCard;
