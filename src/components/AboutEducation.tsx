import { GraduationCap, Globe2 } from 'lucide-react';
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
          <div className="education-main">
            <article className="degree education-card" data-reveal data-reveal-index="0">
              <div className="education-card-top">
                <span className="section-icon" aria-hidden="true"><GraduationCap size={22} /></span>
                <span className="value-badge">CGPA: {educationData.cgpa}</span>
              </div>
              <p className="eyebrow">Undergraduate degree</p>
              <h3>{educationData.institution}</h3>
              <p className="degree-name">{educationData.degree}</p>
              <div className="degree-facts">
                <p>{educationData.standing}</p>
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
              {secondaryEducationData.map((item, index) => (
                <article className="secondary-degree education-card" key={item.degree} data-reveal data-reveal-index={index + 1}>
                  <div className="education-card-top">
                    <p className="eyebrow">{item.degree.includes('HSC') ? 'Higher secondary' : 'Secondary school'}</p>
                    <span className="value-badge">GPA {item.gpa}</span>
                  </div>
                  <h3>{item.institution}</h3>
                  <p>{item.degree}</p>
                  <div className="school-details">
                    <span>Year: {item.year}</span>
                    <span>Board examination</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="languages education-card" aria-labelledby="languages-heading" data-reveal data-reveal-index="3">
            <h3 id="languages-heading"><Globe2 size={18} aria-hidden="true" /> Spoken languages</h3>
            <dl>
              {languagesData.map((item) => (
                <div className="language-row" key={item.language}>
                  <dt>{item.language}</dt>
                  <dd className="value-badge">{item.level}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
