import {
  Button,
  createStyles,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Facebook, Instagram, Language } from "@mui/icons-material";
import { useEffect, useState } from "react";
import LangSet from "../../models/LangSet";
import EngSet from "../../variable/EngSet";
import ThaiSet from "../../variable/ThaiSet";
import Page from "./TabPanel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      backgroundColor: "#ab003c",
      height: "100vh",
    },
    white: {
      color: "white",
    },
    tab: {
      height: "100vh",
    },
    now: {
      color: "#ffac33",
    }
  })
);

function Home() {
  const classes = useStyles();
  const [set, setSet] = useState<LangSet>(EngSet);
  const [lang, setLang] = useState<string>("eng");

  useEffect(() => {
    if (lang === "th") {
      setSet(ThaiSet);
    } else {
      setSet(EngSet);
    }
  }, [lang]);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12} lg={4}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          className={classes.profile}
        >
          <Grid item></Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h1" className={classes.white}>
                  {set.name}
                </Typography>
              </Grid>
              <Grid item>
                <Link
                  href="https://web.facebook.com/palmmy.tonpalm"
                  target="_blank"
                >
                  <IconButton
                    aria-label="facebook"
                    component="span"
                    className={classes.white}
                  >
                    <Facebook />
                  </IconButton>
                </Link>
                <Link
                  href="https://www.instagram.com/nttr1chryn3/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="instragram"
                    component="span"
                    className={classes.white}
                  >
                    <Instagram />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Button
                  onClick={() => {
                    setLang("th");
                  }}
                  className={lang === "th" ? classes.now : classes.white}
                >
                  TH
                </Button>
              </Grid>
              <Grid item>
                <Typography className={classes.white}>|</Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    setLang("eng");
                  }}
                  className={lang === "eng" ? classes.now : classes.white}
                >
                  ENG
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={8} className={classes.tab}>
        <Page langSet={set} />
      </Grid>
    </Grid>
  );
}

export default Home;
