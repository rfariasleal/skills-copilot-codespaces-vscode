function skillsMember() {
  const skills = {
    "JavaScript": 5,
    "React": 4,
    "Node.js": 4,
    "Python": 3,
    "Java": 3,
    "C++": 2,
    "Ruby": 2,
    "PHP": 2,
    "Swift": 1,
    "Kotlin": 1
  };

  const skillList = Object.entries(skills).map(([skill, level]) => {
    return { skill, level };
  });

  return (
    <div className="skills-member">
      <h2>Skills</h2>
      <ul>
        {skillList.map(({ skill, level }) => (
          <li key={skill}>
            {skill}: {level} / 5
          </li>
        ))}
      </ul>
    </div>
  );
}