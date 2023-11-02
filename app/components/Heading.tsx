
type Props = {
  children: string;
  variant: 'v100' | 'v500';
  style?: Record<string, unknown>;
};

const VARIANTS = {
  'v100': { fontSize: '42px', fontWeight: 'bold' },
  'v500': { fontSize: '18px', fontWeight: 'initial' }
};

const Heading = ({ children, variant, style }: Props): JSX.Element => {
  return <p style={{ ...style, ...VARIANTS[variant]  }}>{children}</p>;
};

export { Heading };
