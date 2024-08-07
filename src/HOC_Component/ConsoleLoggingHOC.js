function ConsoleLoggingHOC(WrapperComp) {
  const Person = "hemanth Ragava";
  return () => {
    return <WrapperComp name={Person} />;
  };
}

export default ConsoleLoggingHOC;
