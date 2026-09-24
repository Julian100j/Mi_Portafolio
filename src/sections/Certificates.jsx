import { Award, ExternalLink, FileText, LockKeyhole } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section className="section section-pad" id="certificados">
      <div className="container">
        <SectionTitle number="06" eyebrow="Aprendizaje continuo" title="Certificaciones y formación complementaria." description="Consulta los certificados en PDF o verifica las credenciales disponibles." />
        <div className="certificates-grid">{certificates.map((certificate, index) => <Reveal key={certificate.title} className="certificate-card" delay={(index % 4) * .04}>
          {certificate.image ? <div className="certificate-mark certificate-image"><img src={certificate.image} alt={`Certificado: ${certificate.title}`} loading="lazy" /></div> : <div className="certificate-mark"><Award size={28} /><strong>{certificate.code}</strong></div>}
          <span className="certificate-area">{certificate.area}</span><h3>{certificate.title}</h3><p>{certificate.issuer} · {certificate.date}</p>
          <div className="certificate-actions">
            {certificate.pdfUrl ? <a className="certificate-button" href={certificate.pdfUrl} target="_blank" rel="noopener noreferrer"><FileText size={16} /> Ver certificado</a> : <span className="disabled-link"><LockKeyhole size={15} /> PDF por agregar</span>}
            {certificate.verificationUrl && <a className="verification-link" href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer">Verificar credencial <ExternalLink size={15} /></a>}
          </div>
        </Reveal>)}</div>
      </div>
    </section>
  );
}
