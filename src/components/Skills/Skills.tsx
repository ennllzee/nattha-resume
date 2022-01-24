import {
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Code, Language } from "@mui/icons-material";
import LangSet from "../../models/LangSet";

interface SkilsProp {
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

function Skils({ langSet }: SkilsProp) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start">
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h2" align="left">
          {langSet.skill.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item xs={2} md={1} lg={1} style={{ padding: 0 }}>
            <Code className={classes.icon} />
          </Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h4" align="left">
              {langSet.skill.coding.title}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Divider light />
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h5" align="left">
              {langSet.skill.coding.lang.title}
            </Typography>
            <Typography variant="h6" align="left">
              {langSet.skill.coding.lang.list}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Divider light />
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h5" align="left">
              {langSet.skill.coding.frontend.title}
            </Typography>
            <Typography variant="h6" align="left">
              {langSet.skill.coding.frontend.list}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Divider light />
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h5" align="left">
              {langSet.skill.coding.backend.title}
            </Typography>
            <Typography variant="h6" align="left">
              {langSet.skill.coding.backend.list}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Divider light />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item xs={2} md={1} lg={1} style={{ padding: 0 }}>
            <Language className={classes.icon} />
          </Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h4" align="left">
              {langSet.skill.lang.title}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Divider light />
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h6" align="left">
              {langSet.skill.lang.list}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Divider light />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Skils;
