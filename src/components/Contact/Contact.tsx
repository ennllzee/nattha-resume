import { createStyles, Divider, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { Home, Mail, Phone } from "@mui/icons-material";
import LangSet from "../../models/LangSet";

interface ContactProp {
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

function Contact({ langSet }: ContactProp) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start">
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h2" align="left">
          {langSet.contact.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container spacing={2} direction="row" alignItems="center">
          <Grid item xs={2} md={1} lg={1} style={{padding: 0}}>
            <Home className={classes.icon} />
          </Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h6" align="left">
              {langSet.contact.address}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Divider light />
          </Grid>
          <Grid item xs={2} md={1} lg={1} style={{padding: 0}}>
            <Mail className={classes.icon} />
          </Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h6" align="left">
              {langSet.contact.email}
            </Typography>
          </Grid>
          <Grid item xs={2} md={1} lg={1}></Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Divider light />
          </Grid>
          <Grid item xs={2} md={1} lg={1} style={{padding: 0}}>
            <Phone className={classes.icon} />
          </Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h6" align="left">
              {langSet.contact.tel}
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

export default Contact;
