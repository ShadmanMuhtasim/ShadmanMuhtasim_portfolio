import { educationData, secondaryEducationData, languagesData } from '../data/skills';
import { SectionHeader } from './SectionHeader';

export function AboutEducation() {
  return (
    <section id="education" className="page-section" aria-labelledby="education-heading">
      <div className="container">
        <SectionHeader
          number="03"
          title="Education"
          description="Computer science and engineering studies, earlier education, and spoken languages."
          id="education-heading"
        />
        <div className="education-layout">
          <div>
            <article className="degree">
              <p className="eyebrow">Undergraduate degree</p>
              <h3>{educationData.institution}</h3>
              <p className="degree-name">{educationData.degree}</p>
              <div className="degree-facts">
                <p>{educationData.standing}</p>
                <p>CGPA: {educationData.cgpa}</p>
                <p>{educationData.location}</p>
              </div>
              {educationData.coursework && educationData.coursework.length > 0 && (
                <div className="coursework">
                  <h4>Coursework</h4>
                  <ul className="skill-list">
                    {educationData.coursework.map((course) => <li key={course}>{course}</li>)}
                  </ul>
                </div>
              )}
            </article>
            <div className="secondary-education">
              {secondaryEducationData.map((item) => (
                <article className="secondary-degree" key={item.degree}>
                  <p className="eyebrow">{item.degree}</p>
                  <h3>{item.institution}</h3>
                  <p>Year: {item.year} · GPA {item.gpa}</p>
                  <p>Board examination</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="languages" aria-labelledby="languages-heading">
            <h3 id="languages-heading">Spoken languages</h3>
            <dl>
              {languagesData.map((item) => (
                <div className="language-row" key={item.language}>
                  <dt>{item.language}</dt>
                  <dd>{item.level}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
