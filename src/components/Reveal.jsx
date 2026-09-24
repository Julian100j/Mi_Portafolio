import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .55, delay }}>
      {children}
    </motion.div>
  );
}
