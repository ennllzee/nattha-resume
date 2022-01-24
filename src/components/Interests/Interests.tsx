import { Grid, Typography } from "@material-ui/core";
import LangSet from "../../models/LangSet";

interface InterestsProp{
  langSet : LangSet
}

function Interests({langSet} : InterestsProp) {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">Interests</Typography>
      </Grid>
    </Grid>
  );
}

export default Interests;
