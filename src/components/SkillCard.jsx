const SkillCard = ({icon: Icon, color, name}) => {
  return (
    <div className="flex flex-col items-center hover:scale-105 transition-transform duration-500">
      <Icon className={`icons-styles ${color} `}></Icon>
      <p className="text-lg font-medium text-indigo-700 dark:text-white">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;
