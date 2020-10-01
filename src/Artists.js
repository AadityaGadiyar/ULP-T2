import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";
import axios from "axios";
import { getTokenFromUrl } from "./spotify";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Artists() {
  const [artist, setArtist] = useState(
    null)
  const classes = useStyles();
 

  useEffect(() => {
      
    const token = localStorage.getItem("token2");
    // console.log("hello");
    // console.log(token, "mk");
    // console.log(artist);
    async function fetchData(){
        try{
            const request = await axios({
          method: "GET",
          url: "https://api.spotify.com/v1/me/following?type=artist&limit=20",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            console.log(res);
            setArtist(res);
          })
        }
        
          catch(error){
              console.log(error);
          }}
    
    fetchData();
    
  }, []);
  

  return (
    <div className={classes.root}>
      <div className="container-fluid bg-dark">
        <div className="container ">
          <Grid container spacing={3}>
            {artist
              ? artist.data.artists.items.map((item) => {
                  return (
                    <Grid item sm={4}>
                      <a href={item.external_urls.spotify} target="_blank">
                        <Card
                          className={classes.root}
                          style={{
                            backgroundColor: "rgb(65, 62, 62)",
                            color: "white",
                          }}
                        >
                          <CardActionArea>
                            <img
                              src={item.images[1].url}
                              className="img-fluid rounded-circle py-2"
                            ></img>
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                style={{ color: "white" }}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                Artist
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </a>
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Artists;
