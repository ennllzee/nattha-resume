import { Grid, Typography } from "@material-ui/core";
import LangSet from "../../models/LangSet";

interface WorksProp{
  langSet : LangSet
}

function Works({langSet} : WorksProp) {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">Works</Typography>
      </Grid>
    </Grid>
  );
}

export default Works;
