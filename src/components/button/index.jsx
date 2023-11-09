
import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export default function Button({ icon: Icon, children, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
}
