import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-14">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              technologies={skill.technologies}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;