
const ConditionalContainer = ({ children, condition, container }) => {
  return condition ? container(children) : children;
};

export default ConditionalContainer;
