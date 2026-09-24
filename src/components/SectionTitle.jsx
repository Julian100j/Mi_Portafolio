export default function SectionTitle({ number, eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p className="section-kicker"><span>{number}</span>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
