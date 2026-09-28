import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { profile } from '../data/profile';

const initialForm = { name: '', email: '', subject: '', message: '' };
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Escribe al menos 2 caracteres.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Escribe un correo válido.';
  if (values.subject.trim().length < 3) errors.subject = 'Escribe un asunto más claro.';
  if (values.message.trim().length < 20) errors.message = 'El mensaje debe tener al menos 20 caracteres.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) { setStatus('Revisa los campos marcados.'); return; }
    const subject = encodeURIComponent(form.subject.trim());
    const body = encodeURIComponent(`Nombre: ${form.name.trim()}\nCorreo: ${form.email.trim()}\n\n${form.message.trim()}`);
    setStatus('Abriendo tu aplicación de correo…');
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section className="section section-pad contact-section" id="contacto">
      <div className="container">
        <SectionTitle number="07" eyebrow="Contacto" title="¿Construimos algo que importe?" description="Estoy abierto a conversar sobre prácticas, proyectos, colaboraciones y oportunidades de aprendizaje." />
        <div className="contact-grid">
          <Reveal className="contact-details">
            <h3>Encuéntrame aquí</h3>
            <a href={`mailto:${profile.email}`}><Mail size={19} /><span><small>Correo</small>{profile.email}</span></a>
            <a href={`https://github.com/${profile.githubUsername}`} target="_blank" rel="noreferrer"><Github size={19} /><span><small>GitHub</small>@{profile.githubUsername}</span></a>
            <a href={`https://linkedin.com/in/${profile.linkedinUsername}`} target="_blank" rel="noreferrer"><Linkedin size={19} /><span><small>LinkedIn</small>/{profile.linkedinUsername}</span></a>
            <div><MapPin size={19} /><span><small>Ubicación</small>{profile.location}</span></div>
          </Reveal>
          <Reveal delay={.1}>
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="form-row">
                <label>Nombre<input name="name" value={form.name} onChange={update} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} placeholder="Tu nombre" />{errors.name && <small id="name-error" className="field-error">{errors.name}</small>}</label>
                <label>Correo<input name="email" type="email" value={form.email} onChange={update} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} placeholder="tu@correo.com" />{errors.email && <small id="email-error" className="field-error">{errors.email}</small>}</label>
              </div>
              <label>Asunto<input name="subject" value={form.subject} onChange={update} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} placeholder="¿Sobre qué quieres conversar?" />{errors.subject && <small id="subject-error" className="field-error">{errors.subject}</small>}</label>
              <label>Mensaje<textarea name="message" rows="6" value={form.message} onChange={update} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} placeholder="Cuéntame un poco sobre la oportunidad o el proyecto…" />{errors.message && <small id="message-error" className="field-error">{errors.message}</small>}</label>
              <div className="form-submit"><button className="button button-primary" type="submit">Enviar mensaje <Send size={17} /></button><p role="status" aria-live="polite">{status}</p></div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
