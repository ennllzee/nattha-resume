import {
  Button,
  CardMedia,
  createStyles,
  Grid,
  Hidden,
  IconButton,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import {
  Facebook,
  Instagram,
  KeyboardArrowDown,
  LocationOn,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import LangSet from "../../models/LangSet";
import EngSet from "../../variable/EngSet";
import ThaiSet from "../../variable/ThaiSet";
import Page from "./TabPanel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      backgroundColor: "#ab003c",
      minHeight: "100vh",
    },
    white: {
      color: "white",
    },
    tab: {
      height: "100vh",
      overflow: "auto",
    },
    now: {
      color: "#ffac33",
    },
    icon: {
      marginBottom: -5,
      color: "white",
    },
    media: {
      height: 0,
      paddingTop: "100%",
      borderRadius: 360,
    },
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

  const jump = () => {
    const resume = document.getElementById("resume");
    resume?.scrollIntoView({ behavior: "smooth" });
  };

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
            <Grid container direction="row" justify="center">
              <Grid item xs={5} md={5} lg={5} style={{margin: 5}}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://bn1305files.storage.live.com/y4m4sWbwy36ra2gGyvyRliMpkwIESoWPHr_OEjfpcxWy5CViUz2cS4Ykthbp79rw-ftqHvDg4wlPTIWIlzf3yN0zfSMXqASIY8t5IJ54pD_w_NULCjXLMMDgRcMrLDCCb1Uj6EHqkbzSma1RfrPfNqoQOY52MFmPdQUlq-ygXR1JCXxln-K-_qZtKbCPIZZMrv6?width=4000&height=4000&cropmode=none"
                  }
                  title="Take Care App"
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h1" className={classes.white}>
                  {set.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h5" className={classes.white}>
                  <LocationOn className={classes.icon} />
                  {"\t"}
                  {set.location}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
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
              <Hidden lgUp={true}>
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={undefined}
                  style={{ padding: 0 }}
                >
                  <Button onClick={jump} className={classes.white}>
                    resume <KeyboardArrowDown />
                  </Button>
                </Grid>
              </Hidden>
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
      <Grid item xs={12} md={12} lg={8} className={classes.tab} id="resume">
        <Page langSet={set} />
      </Grid>
    </Grid>
  );
}

export default Home;
