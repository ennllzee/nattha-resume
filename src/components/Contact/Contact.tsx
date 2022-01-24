import { Grid, Typography } from "@material-ui/core";
import LangSet from "../../models/LangSet";

interface ContactProp {
  langSet: LangSet;
}

function Contact({ langSet }: ContactProp) {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">Contact</Typography>
      </Grid>
    </Grid>
  );
}

export default Contact;
