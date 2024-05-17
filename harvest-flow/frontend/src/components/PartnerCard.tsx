import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";

export type PartnerCardProps = {
  img?: any;
  title?: string;
  job_title?: string;
  content?: string;
  bottom?: string;
};

const PartnerCard: React.FC<PartnerCardProps> = ({
  img,
  job_title,
  title,
  content,
  bottom,
}) => {
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="fade">
      {" "}
      <Card
        sx={{
          position: "absolute",
          bottom: bottom,
          zIndex: 10,
          boxSizing: "border-box",
          width: "80%",
          marginLeft: "7%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "row",
          border: "1px solid #000",
          borderRadius: "0px",
          padding: "2rem",
          transition: "0.5s easin",
        }}
        className="fade"
      >
        <Grid container className="fade">
          <Grid item xs={12} md={6}>
            <CardMedia sx={{ height: 490 }} image={img} title="green iguana" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                sx={
                  isMediumUp
                    ? {
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "18px",
                        marginTop: "70px",
                      }
                    : {
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "18px",
                        marginTop: "25px",
                      }
                }
                component="div"
              >
                {job_title}
              </Typography>

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: "28px",
                  marginTop: "20px",
                  fontWeight: "500",
                  lineHeight: "36px",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={
                  isMediumUp
                    ? {
                        marginTop: "120px",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "black !important",
                        lineHeight: "18px",
                        letterSpacing: "1px",
                      }
                    : {
                        marginTop: "25px",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "black !important",
                        lineHeight: "18px",
                        letterSpacing: "1px",
                      }
                }
              >
                {content}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};
export default PartnerCard;
