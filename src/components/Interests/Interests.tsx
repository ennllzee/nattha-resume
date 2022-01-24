import {
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Brush, CameraAlt, LocalMovies, SportsEsports, Web } from "@mui/icons-material";
import LangSet from "../../models/LangSet";

interface InterestsProp {
  langSet: LangSet;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      padding: 5,
      marginBottom: -5,
      color: "white",
      backgroundColor: "#ab003c",
      borderRadius: 8,
    },
  })
);

function Interests({ langSet }: InterestsProp) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start">
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h2" align="left">
          {langSet.interest.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container spacing={2} direction="row" alignItems="center">
          {langSet.interest.list.map((m, k) => {
            return (
              <>
                <Grid item xs={2} md={1} lg={1} style={{ padding: 0 }}>
                  {k === 0 ? (
                    <Web className={classes.icon} />
                  ) : k === 1 ? (
                    <Brush className={classes.icon} />
                  ) : k === 2 ? (
                    <CameraAlt className={classes.icon} />
                  ) : k === 3 ? (
                    <LocalMovies className={classes.icon} />
                  ) : (
                    <SportsEsports className={classes.icon} />
                  )}
                </Grid>
                <Grid item xs={10} md={11} lg={11}>
                  <Typography variant="h6" align="left">
                    {m}
                  </Typography>
                </Grid>
                <Grid item xs={2} md={1} lg={1}></Grid>
                <Grid item xs={10} md={11} lg={11}>
                  <Divider light />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Interests;
