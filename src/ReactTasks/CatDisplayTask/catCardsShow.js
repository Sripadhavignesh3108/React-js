import "./catCards.css";
import { useEffect, useState } from "react";
import useCustomAxios from "../../CustomHooks/CustomAxiosHook";
import DnaSpinner from "../../BasicComponents/CustomSpinners/DNAspinner";

function CatCardsShow() {
  const [pickedDetails, updatepick] = useState([]);
  const [catNumber, updateCat] = useState(0);
  const CatsData = useCustomAxios(
    "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_qaAB6n53MIUCkifHA1ndOZTYp6sM7kGI9mFSGU1eEna7oF5mbGBTP7XCEyzlztLm"
  );
  useEffect(() => {
    if (CatsData !== undefined && CatsData.length > 0) {
      updatepick(CatsData[catNumber]);
    }
  }, [catNumber, CatsData]);
  console.log(CatsData);

  const hoverHandler = () => {
    let img = document.getElementsByTagName("img")[0];
    img.style.filter = "blur(10px)";
    img.style.zIndex = "-2";
  };
  const leaveHandler = () => {
    let img = document.getElementsByTagName("img")[0];
    img.style.filter = "blur(0px)";
    img.style.zIndex = "0";
  };
  const changeHandler = () => {
    updateCat(catNumber + 1);
  };
  return (
    <div>
      {pickedDetails.length === 0 ? (
        <DnaSpinner />
      ) : (
        <div
          className="container"
          onMouseEnter={hoverHandler}
          onMouseLeave={leaveHandler}
          onClick={changeHandler}
          id="container"
        >
          <img
            src={pickedDetails.url}
            width="400px"
            height="400px"
            alt={pickedDetails.id}
          />
          <div className="Details">
            {pickedDetails.breeds.map((each) => (
              <>
                <h1>
                  {each.name}
                  <span style={{ fontSize: "19px", marginLeft: "5px" }}>
                    ~{each.origin}
                  </span>
                </h1>
                <p className="description">{each.description}</p>
                <p>
                  <b>Life span :</b>
                  {each.life_span} Years
                </p>
                <p>
                  <b>Dog friendly : </b>
                  {each.dog_friendly} / 5
                </p>
                <p>
                  <b>Energy level : </b> {each.energy_level} / 5
                </p>
                <p>
                  <b>Intelligence : </b> {each.intelligence} / 5
                </p>
                <a href={each.wikipedia_url} target="_blank" rel="noreferrer">
                  Know More &gt;
                </a>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CatCardsShow;
