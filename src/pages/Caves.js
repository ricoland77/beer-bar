import caves from "../caves.json";

const Caves = () => {
  return (
    <div className="container">
      <div className="top-caves"></div>
      <div className="all-caves">
        <div>
          <h1 className="title-caves">Beer caves</h1>
          <p className="baseline-caves">in and around Paris</p>
          <p className="baseline-country">France</p>
        </div>
        {caves.map((cave, index) => {
          return (
            <>
              <div className="cave">
                <div className="cave-name">{cave.nom}</div>
                <div className="cave-adress">
                  {cave.adresse
                    .replace(", ", " – ")
                    .replace(" R", ", r")
                    .replace(" Boulevard", ", boulevard")
                    .replace("bis,,", "bis,")
                    .replace(" Avenue", ", avenue")
                    .replace(" Place", ", place")
                    .replace(" Allée", ", allée")
                    .replace(" Esplanade", ", esplanade")
                    .replace(" Grande, rue", ", Grande Rue")
                    .replace("Beauvau –, place", "Beauvau – Place")
                    .replace("la, résistance", "la résistance")}
                </div>
                {cave.fermeture !== null && (
                  <div className="closed">
                    <span>Definitively closed</span>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
      <div className="bottom-caves"></div>
    </div>
  );
};

export default Caves;
