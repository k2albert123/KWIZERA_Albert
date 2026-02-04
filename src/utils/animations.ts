export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const slideIn = (direction: 'left' | 'right' | 'top' | 'bottom') => {
  const x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
  const y = direction === 'top' ? '-100%' : direction === 'bottom' ? '100%' : '0';

  return {
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.5 },
  };
};

export const scaleUp = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
  transition: { duration: 0.3 },
};