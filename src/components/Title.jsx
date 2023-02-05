const Title = ({ content }) => {
  const titleContent = content.map((titleElement) => (
    <span className={titleElement.classes} key={titleElement.text}>
      {titleElement.text}
    </span>
  ));

  return <h1 className="title">{titleContent}</h1>;
};

export default Title;
