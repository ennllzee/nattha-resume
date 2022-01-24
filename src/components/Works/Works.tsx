import {
  CardMedia,
  createStyles,
  Divider,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import {
  Dashboard,
  EmojiEvents,
  MenuBook,
  YouTube,
} from "@mui/icons-material";
import LangSet from "../../models/LangSet";

interface WorksProp {
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
    media: {
      height: 0,
      paddingTop: "100%",
    },
    more: {
      color: "#ab003c",
    },
    reward: {
      marginBottom: -5,
    },
    box: {
      backgroundColor: "#eeeeee",
      borderRadius: 8,
      padding: 8,
    },
  })
);

function Works({ langSet }: WorksProp) {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="row" alignItems="flex-start">
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h2" align="left">
          {langSet.work.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={2} md={1} lg={1} style={{ padding: 0 }}>
            <Dashboard className={classes.icon} />
          </Grid>
          <Grid item xs={10} md={11} lg={11}>
            <Typography variant="h4" align="left">
              {langSet.work.project.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider light />
          </Grid>
          <Grid item xs={6} md={6} lg={4}>
            <CardMedia
              className={classes.media}
              image={
                "https://bn1305files.storage.live.com/y4m-VdmknM_pfPpiJERPIxlLWj2FpheMGzFF9YkvkMvoXUGDoa_GRUjjxP1JMUtB74zJzZp7BNR1038nmT8lQLMJzDaOQOBBFAl76hWq25RWFC3ml12RuYi3y-Je95YLiiaunBh8mBkWMnOy2mAlge6n5KGjIXJM0cXp6L8btV2YfaFzfPkBN6d8_D_hV9hhKG_?width=1080&height=1080&cropmode=none"
              }
              title="Take Care App"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h6" align="left">
                  {langSet.work.project.description}
                </Typography>
              </Grid>
              <Divider light />
              <Grid item>
                <Typography variant="body1" align="left">
                  MORE INFO{"\t\t"}
                  <Link
                    href="https://www.youtube.com/watch?v=c0tEsXE78jM"
                    target="_blank"
                  >
                    <IconButton
                      aria-label="youtube"
                      component="span"
                      color="secondary"
                      style={{ padding: 3 }}
                    >
                      <YouTube className={classes.more} />
                    </IconButton>
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=c0tEsXE78jM"
                    target="_blank"
                  >
                    <IconButton
                      aria-label="manual"
                      component="span"
                      color="secondary"
                      style={{ padding: 3 }}
                    >
                      <MenuBook className={classes.more} />
                    </IconButton>
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className={classes.box}
                >
                  <Grid item xs={2} md={1} lg={1}>
                    <Typography align="left">
                      <EmojiEvents className={classes.reward} />
                    </Typography>
                  </Grid>
                  <Grid item xs={10} md={11} lg={11}>
                    <Typography variant="h6" align="left">
                      {langSet.work.project.reward?.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Divider light />
                  </Grid>
                  <Grid item xs={2} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={11} lg={11}>
                    <Typography variant="body1" align="left">
                      {langSet.work.project.reward?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} md={1} lg={1}></Grid>
                  <Grid item xs={10} md={11} lg={11}>
                    <Typography variant="body1" align="left">
                      - {langSet.work.project.reward?.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Works;
