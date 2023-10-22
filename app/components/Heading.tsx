
type Props = {
  children: string;
  variant: 'v100';
  style: Record<string, unknown>;
};

const VARIANTS = {
  'v100': { fontSize: '48px', fontWeight: 'bolder' }
};

const Heading = ({ children, variant, style }: Props): JSX.Element => {
  return <p style={{ ...style, ...VARIANTS[variant]  }}>{children}</p>;
};

export { Heading };
