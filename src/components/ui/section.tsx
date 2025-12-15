import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  animate?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  title,
  subtitle,
  centered = false,
  animate = true
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const MotionDiv = animate ? motion.div : 'div';

  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <MotionDiv
            className={`mb-16 ${centered ? 'text-center' : ''}`}
            {...(animate && {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              transition: { duration: 0.6 },
              variants
            })}
          >
                      <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          </MotionDiv>
        )}
        {animate ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={variants}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};