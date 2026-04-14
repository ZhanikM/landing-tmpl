import { motion } from 'framer-motion';

interface Props {
  children: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ children, className = '', delay = 0 }: Props) {
  const words = children.split(' ');

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: delay + i * 0.04,
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
