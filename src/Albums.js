import React, { useEffect, useState } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


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

function Albums() {
  const [album, setAlbum] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem("token2");
    
    async function fetchData() {
      try {
        const request = await axios({
          method: "GET",
          url: "https://api.spotify.com/v1/me/albums?offset=0&limit=20",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          console.log(res);
          setAlbum(res);
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
      
    <div className={classes.root}>
      <div className="container-fluid bg-dark">
        <div className="container ">
          <Grid container spacing={3}>
            {album
              ? album.data.items.map((item) => {
                  return (
                    <Grid item sm={4}>
                      <a href={item.album.external_urls.spotify} target="_blank">
                        <Card
                          className={classes.root}
                          style={{
                            backgroundColor: "rgb(65, 62, 62)",
                            color: "white",
                          }}
                        >
                          <CardActionArea>
                            <img
                              src={item.album.images[1].url}
                              className="img-fluid rounded-circle py-2"
                            ></img>
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {item.album.name}
                              </Typography>
                              <Typography
                                style={{ color: "white" }}
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {item.album.artists[0].name}
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

export default Albums;
