interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
  id: string;
}

export function SectionHeader({ number, title, description, id }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-heading">
        <span className="section-number" aria-hidden="true">{number}.</span>
        <h2 className="section-title" id={id}>{title}</h2>
      </div>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}
