const Child = ({ clicks }) => {
  console.log("CHILD COMPONENT WAS Updated");
  return (
    <div>
      <h2>{clicks}</h2>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo modi
      eos corrupti atque. Aliquam hic autem, tempora, corporis est quisquam
      dolorum nulla molestiae officiis nihil, blanditiis error nobis cum
      reprehenderit. Voluptas deserunt, molestias veniam, aliquid itaque illum
      iusto saepe totam placeat ipsam ex! Et autem dolorum, modi, pariatur odio
      exercitationem incidunt facilis saepe voluptatum temporibus fugiat velit
      iusto vel dicta?
    </div>
  );
};

export default Child;
