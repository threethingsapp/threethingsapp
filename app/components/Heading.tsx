
const VARIANTS = {
  'v100': { fontSize: '42px', fontWeight: 'bold' },
  'v200': { fontSize: '38px', fontWeight: 'bold' },
  'v500': { fontSize: '18px', fontWeight: 'initial' }
};

type Props = {
  children: string;
  variant: keyof typeof VARIANTS;
  style?: Record<string, unknown>;
};

const Heading = ({ children, variant, style }: Props): JSX.Element => {
  return <p style={{ ...style, ...VARIANTS[variant]  }}>{children}</p>;
};

export { Heading };
