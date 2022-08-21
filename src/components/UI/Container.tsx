type ContainerProps = {
  styles: React.CSSProperties;
  children: string;
};

export const Container: React.FC<ContainerProps> = ({ styles, children }) => {
  return (
    <div style={styles}>{children}</div>
  );
};

export default Container;
