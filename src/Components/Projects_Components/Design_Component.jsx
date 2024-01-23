  const Design_Component = ({img, Title, Article }) => {
    return (
      <div id="Design_Component" >
        <img className="rounded-t-2xl" src={img} alt={Title} />
       <div className="text-center rounded-b-2xl p-2 pb-6">
       <h2>{Title}</h2>
        <p>{Article}</p>
     </div> </div>
    );
  };
export default Design_Component;