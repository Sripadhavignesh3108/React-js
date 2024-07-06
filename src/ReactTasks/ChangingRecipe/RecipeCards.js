import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import DnaSpinner from "../../BasicComponents/CustomSpinners/DNAspinner";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(prop) {
  const [ResultData, updateData] = useState();
  const [expanded, setExpanded] = useState(false);
  const [movieNumber, updateNumber] = useState(1);
  const [obj, updateobj] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    if (response.status === 200) {
      const recipeList = response.data.recipes;
      updateData(recipeList);
    }
  };

  useEffect(() => {
    if (ResultData !== undefined) {
      updateobj(ResultData.filter((each) => each.id === movieNumber));
    }
  }, [ResultData, movieNumber]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const nextHandler = () => {
    updateNumber((prev) => prev + 1);
  };

  const previousHandler = () => {
    updateNumber((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      {obj && obj.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Button
            color="primary"
            size="large"
            style={{ marginRight: "50px", border: "2px solid #008BD6" }}
            onClick={previousHandler}
          >
            Previous
          </Button>
          <Card
            sx={{ maxWidth: 345 }}
            style={{ boxShadow: "0px 0px 10px 2px grey" }}
          >
            <CardMedia
              component="img"
              height="194"
              image={obj[0].image}
              alt="Recipe dish"
            />
            <CardContent>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  margin: "0px 0px 10px 0px",
                  fontWeight: "600",
                }}
                color="primary"
              >
                {obj[0].name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ margin: "5px", fontSize: "18px", textAlign: "center" }}
              >
                Cuisine : {obj[0].cuisine}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ margin: "5px", fontSize: "18px", textAlign: "center" }}
              >
                Difficulty : {obj[0].difficulty}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ margin: "5px", fontSize: "18px", textAlign: "center" }}
              >
                Rating : {obj[0].rating} / 5
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph color="primary">
                  Ingredients:
                </Typography>
                <Typography paragraph>
                  {obj[0].ingredients.map((each, index) => (
                    <li key={index}>{each}</li>
                  ))}
                </Typography>
                <Typography paragraph color="primary">
                  Method:
                </Typography>
                <Typography paragraph>
                  {obj[0].instructions.map((each, index) => (
                    <li key={index}>{each}</li>
                  ))}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Button
            color="primary"
            size="large"
            style={{ marginLeft: "50px", border: "2px solid #008BD6" }}
            onClick={nextHandler}
          >
            Next Recipe
          </Button>
        </div>
      ) : (
        <DnaSpinner />
      )}
    </>
  );
}
