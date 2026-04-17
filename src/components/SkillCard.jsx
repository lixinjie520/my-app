const SkillCard = ({icon: Icon, color, name}) => {
  return (
    <div className="icons-card">
      <Icon className={`icons-styles ${color} `}></Icon>
          <p className="icons-text-styles">{ name }</p>
    </div>
  );
};

export default SkillCard;
