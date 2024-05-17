import React, { useState } from "react";
import CountUp from "react-countup";

import Layout from "@src/layouts/Layout";
import PartnerCard from "@src/components/PartnerCard";
import FaqAccordion from "@src/components/FaqAccordion";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Box, Hidden, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";

import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import XIcon from "@mui/icons-material/X";

import Top2 from "@assets/images/Top/Top2.png";
import Top3 from "@assets/images/Top/Top3.png";
import Top4 from "@assets/images/Top/Top4.png";
import logo from "@assets/images/Top/6.png";
import HowToBg2 from "@assets/images/Top/howTowork.png";
import Partner1 from "@assets/images/Top/partner.png";
import apasport_logo from "@assets/images/Top/apasport.png";
import bgImg from "@assets/images/Top/bg.png";
import bg2Img from "@assets/images/Top/bg-2.png";
import about1 from "@assets/images/Top/about1.png";
import about2 from "@assets/images/Top/about2.png";

const DiscordIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24" sx={{ color: "white" }}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </SvgIcon>
);

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    backgroundColor: "#e8eff5",
    border: "1px solid black",
    borderRadius: "0px",
    height: "100%",
  }));

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    // <div>
    <Layout>
      <div className="bg-Top1">
        {!isMediumUp && (
          <button style={{ width: "100%", padding: "17px 0px" }}>
            connect wallet
          </button>
        )}
        <img src={logo} style={{ marginTop: "100px" }} />
        <h1
          style={{
            fontFamily: "sans-serif",
            color: "white",
            fontSize: "56px",
          }}
        >
          Harvest Flow
        </h1>
        <p className="top-content">
          Helping the world bear fruit with the help of latest technology
          Investment Platform for a New Era
        </p>
        <p className="top-mention">
          &quot;Feel, think, and grow the world with your investments.&quot;
        </p>
        <div className="price-show">
          <div>
            <p>Total Value Loaned</p>
            <span>
              $<CountUp end={1234} />
            </span>
          </div>
          <div>
            <p>Repaid</p>
            <span>
              $<CountUp end={123456} />
            </span>
          </div>
          <div>
            <p>Holders</p>
            <span>
              $<CountUp end={12345} />
            </span>
          </div>
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <Item>
              <h2 className="semi-title">OUR PROJECT</h2>
            </Item>
          </Grid>
          <Grid item md={6} sx={{ maxHeight: "800px" }}>
            <Item>
              <img src={Top2} style={{ height: "100%" }} />
            </Item>
          </Grid>
          <Grid container item md sx={{ maxHeight: "800px" }}>
            <Grid item md={8} xs={12}>
              <Grid item md xs={12}>
                <Item
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <h1 className="sub-title" style={{ marginTop: "90px" }}>
                    TUK TUK harvest flow future project
                  </h1>
                  <span
                    className="semi-content"
                    style={{ marginBottom: "20px" }}
                  >
                    orem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et doloremagna.Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit,sed do
                    eiusmod tempor incididunt ut labore et doloremagna.
                  </span>
                  <Grid container>
                    <Grid item xs={4}>
                      <Item>
                        <p
                          style={{
                            fontSize: "15px",
                            borderBottom: "1px dotted #000",
                          }}
                        >
                          APY
                        </p>
                        <p style={{ fontSize: "1.5rem", padding: "2.25rem" }}>
                          8%
                        </p>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <p
                          style={{
                            fontSize: "15px",
                            borderBottom: "1px dotted #000",
                          }}
                        >
                          STATUS
                        </p>
                        <p style={{ fontSize: "1.5rem", padding: "2.25rem" }}>
                          OPEN
                        </p>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <p
                          style={{
                            fontSize: "15px",
                            borderBottom: "1px dotted #000",
                          }}
                        >
                          ASSET TYPE
                        </p>
                        <p style={{ fontSize: "1.5rem", padding: "2.25rem" }}>
                          VEHICLE
                        </p>
                      </Item>
                    </Grid>
                  </Grid>
                  <p style={{ padding: "2rem" }}>VIEW MORE</p>
                </Item>
              </Grid>
            </Grid>
            <Grid item md={4} style={{ height: "100%" }}>
              <Item
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isMediumUp && <p>coming soon</p>}
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction={isMediumUp ? "row-reverse" : "column"}>
          <Grid item xs={12} md="auto">
            <Item
              sx={isMediumUp ? { maxHeight: "800px" } : { height: "270px" }}
            >
              <div style={{ position: "relative" }}>
                <img src={Top3} style={{ width: "100%" }} />
                <img
                  src={about1}
                  style={
                    isMediumUp
                      ? { position: "absolute", bottom: "0px", left: "0px" }
                      : {
                          position: "absolute",
                          bottom: "0px",
                          left: "0px",
                          width: "50%",
                        }
                  }
                />
                <img
                  src={about2}
                  style={
                    isMediumUp
                      ? { position: "absolute", top: "0px", right: "0px" }
                      : {
                          position: "absolute",
                          top: "0px",
                          right: "0px",
                          width: "50%",
                        }
                  }
                />

                <h2
                  style={
                    isMediumUp
                      ? {
                          position: "absolute",
                          top: "40%",
                          left: "30%",
                          alignContent: "center",
                          fontSize: "40px",
                          width: "35%",
                          zIndex: 1,
                          color: "white",
                          letterSpacing: "30px",
                        }
                      : {
                          position: "absolute",
                          top: "25%",
                          left: "20%",
                          alignContent: "center",
                          fontSize: "40px",
                          width: "35%",
                          zIndex: 1,
                          color: "white",
                          letterSpacing: "30px",
                        }
                  }
                >
                  ABOUT HARVEST FLOW
                </h2>

                {isMediumUp ? (
                  <Button
                    variant="contained"
                    style={{
                      position: "absolute",
                      top: "85%",
                      right: "10%",
                      padding: "17px 22px 18px 22px",
                      width: "auto",
                      zIndex: 1,
                      backgroundColor: "white",
                      borderRadius: "0px",
                      color: "black",
                    }}
                  >
                    PLAY MOVIE
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "30vw",
                      padding: "17px 22px 18px 22px",
                      width: "auto",
                      zIndex: 10,
                      backgroundColor: "white",
                      borderRadius: "0px",
                      color: "black",
                    }}
                  >
                    PLAY MOVIE
                  </Button>
                )}
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md>
            <Item sx={{ overflowY: "scroll", maxHeight: "800px" }}>
              {isMediumUp && (
                <>
                  <h2 className="semi-title">ABOUT HARVEST FLOW</h2>
                  <hr style={{ paddingBottom: "200px" }} />
                </>
              )}
              <h2
                className="section-tilte"
                style={!isMediumUp ? { paddingTop: "150px" } : {}}
              >
                An investment experience that transforms society with emotion.
              </h2>

              <p className="semi-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et doloremagna. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et doloremagna.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna.Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et doloremagna.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et doloremagna.
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={6} xs={12} sx={{ maxHeight: "800px" }}>
            <Item>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={bgImg}
                  style={{
                    height: "800px",
                    backgroundSize: "cover",
                  }}
                />
                {/* <h2
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "25%",
                    alignContent: "center",
                    fontSize: "40px",
                    width: "35%",
                    zIndex: 1,
                    color: "white",
                    letterSpacing: "30px",
                  }}
                ></h2> */}
                <div
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "0%",
                    alignContent: "center",
                    fontSize: "40px",
                    zIndex: 1,
                    color: "white",
                  }}
                >
                  <Grid sx={{ gap: "40px", padding: "20px" }}>
                    <Grid
                      container
                      style={{
                        backgroundColor: "white",
                        marginBottom: "10px",
                        padding: "20px",
                      }}
                    >
                      <h1 className="section-title">
                        An investment experience that transforms society with
                        emotion.
                      </h1>
                      <Grid item md={6} xs={6}>
                        <p className="semi-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          doloremagna.Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit, sed do eiusmod tempor incididun.
                        </p>
                      </Grid>
                      <Grid item md={6} xs={6}>
                        <img
                          src={Top4}
                          style={{ width: "70%", textWrap: "wrap" }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      style={{ backgroundColor: "white", padding: "20px" }}
                    >
                      <h1 className="section-title">
                        An investment experience that transforms society with
                        emotion.
                      </h1>
                      <p className="semi-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        doloremagna.Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna.Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et doloremagna. Lorem ipsum
                        dolor sit amet.
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Item>
          </Grid>
          {isMediumUp ? (
            <Grid item md={6}>
              <Item sx={{ overflowY: "scroll", maxHeight: "800px" }}>
                <h2 className="semi-title">FEATURES</h2>
                {isMediumUp && <hr style={{ paddingBottom: "200px" }} />}
                <Grid container>
                  <Grid item md={6}>
                    <h1 className="section-title">
                      An investment experience that transforms society with
                      emotion.
                    </h1>
                    <p className="semi-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et
                      doloremagna.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididun.
                    </p>
                  </Grid>
                  <Grid item md={6}>
                    <img src={Top4} style={{ width: "70%" }} />
                  </Grid>
                </Grid>
                <h1 className="section-title">
                  An investment experience that transforms society with emotion.
                </h1>
                <p className="semi-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et doloremagna.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et doloremagna. Lorem
                  ipsum dolor sit amet.
                </p>
              </Item>
            </Grid>
          ) : (
            ""
          )}
          {/* <Grid item md={6} xs={12}>
            <Item sx={{ overflowY: "scroll", maxHeight: "800px" }}>
              <h2 className="semi-title">FEATURES</h2>
              {isMediumUp && <hr style={{ paddingBottom: "200px" }} />}
              <Grid container>
                <Grid item md={6}>
                  <h1 className="section-title">
                    An investment experience that transforms society with
                    emotion.
                  </h1>
                  <p className="semi-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et
                    doloremagna.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididun.
                  </p>
                </Grid>
                <Grid item md={6}>
                  <img src={Top4} style={{ width: "70%" }} />
                </Grid>
              </Grid>
              <h1 className="section-title">
                An investment experience that transforms society with emotion.
              </h1>
              <p className="semi-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et doloremagna. Lorem ipsum dolor sit amet.
              </p>
            </Item>
          </Grid> */}
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={6}>
            <Item sx={{ overflowY: "scroll", maxHeight: "710px" }}>
              <h2 className="semi-title">FAQ</h2>
              {isMediumUp && <hr style={{ paddingBottom: "200px" }} />}

              <h1
                style={
                  isMediumUp
                    ? {
                        fontSize: "32px !important",
                        fontWeight: "500",
                        lineHeight: "36px",
                      }
                    : {
                        fontSize: "18px",
                      }
                }
              >
                An investment experience that transforms society with emotion.
              </h1>
              <FaqAccordion
                acc={[
                  {
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?",
                    content:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet.",
                  },
                  {
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?",
                    content:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet.",
                  },
                  {
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?",
                    content:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet.",
                  },
                  {
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?",
                    content:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet.",
                  },
                  {
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?",
                    content:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet.",
                  },
                  {
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?",
                    content:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet.",
                  },
                  {
                    title:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?",
                    content:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet.",
                  },
                ]}
              />
            </Item>
          </Grid>
          <Grid item md={6} style={{ overflow: "hidden", maxHeight: "800px" }}>
            <Item>
              <div style={{ position: "relative", overflow: "hidden" }}>
                {!isMediumUp ? (
                  ""
                ) : (
                  <>
                    <img src={bg2Img} style={{ width: "100%" }}></img>
                    <h2
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "35%",
                        alignContent: "center",
                        fontSize: "40px",
                        width: "35%",
                        zIndex: 1,
                        color: "white",
                        letterSpacing: "30px",
                      }}
                    >
                      FAQ
                    </h2>
                    <Button
                      variant="contained"
                      style={{
                        position: "absolute",
                        top: "85%",
                        right: "10%",
                        padding: "17px 22px 18px 22px",
                        width: "auto",
                        zIndex: 1,
                        backgroundColor: "white",
                        borderRadius: "0px",
                        color: "black",
                      }}
                    >
                      VIEW MORE
                    </Button>
                  </>
                )}
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <Item
              sx={
                isMediumUp
                  ? { overflowY: "scroll", height: "600px" }
                  : { height: "300px" }
              }
            >
              {isMediumUp ? (
                ""
              ) : (
                <Button
                  variant="contained"
                  style={{
                    marginTop: "20px",
                    padding: "17px 22px 18px 22px",
                    width: "auto",
                    zIndex: 1,
                    backgroundColor: "white",
                    borderRadius: "0px",
                    color: "black",
                  }}
                >
                  {" "}
                  VIEW MORE
                </Button>
              )}

              <h1
                style={
                  isMediumUp
                    ? {
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "36px",
                        padding: "200px 60px 100px 60px",
                        wordSpacing: "20px",
                        letterSpacing: "8px",
                      }
                    : {
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "36px",
                        padding: "100px 60px 50px 60px",
                        wordSpacing: "20px",
                        letterSpacing: "8px",
                      }
                }
              >
                HOW IT WORKS
              </h1>
              {!isMediumUp ? (
                ""
              ) : (
                <p className="semi-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et doloremagna.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna.sed do
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              )}
            </Item>
          </Grid>
          <Grid item md xs={12}>
            <Item
              style={
                isMediumUp
                  ? {
                      maxHeight: "800px",
                      overflow: "hidden",
                      position: "relative",
                    }
                  : {
                      maxHeight: "660px",
                    }
              }
            >
              <div className="outer-wrapper">
                <div className="wrapper">
                  <div className="slide">
                    <img
                      src={HowToBg2}
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                      }}
                    />
                  </div>
                </div>
              </div>
              {isMediumUp ? (
                ""
              ) : (
                <p className="semi-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et doloremagna.Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna.sed do
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ position: "relative" }}>
          <Grid item md={12} xs>
            <Item style={{ zIndex: 10 }}>
              <h1
                style={
                  isMediumUp
                    ? {
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "36px",
                        alignContent: "center",
                        padding: "60px 60px 60px 60px",
                        wordSpacing: "20px",
                        letterSpacing: "8px",
                        marginBottom: "300px",
                      }
                    : {
                        fontSize: "32px",
                        fontWeight: "500",
                        lineHeight: "36px",
                        alignContent: "center",
                        padding: "90px 60px 600px 60px",
                        wordSpacing: "20px",
                        letterSpacing: "8px",
                        marginBottom: "350px",
                      }
                }
              >
                PARTNER
              </h1>
              <div style={{ paddingBottom: 80 }}>
                {current && current === 1 ? (
                  <PartnerCard
                    bottom={isMediumUp ? "-200px" : "-100px"}
                    img={Partner1}
                    job_title="1FINANCIE fOUNDER"
                    title="HIRONAO"
                    content="Lorem ipsum dolelit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                ) : current === 2 ? (
                  <PartnerCard
                    bottom={isMediumUp ? "-200px" : "-100px"}
                    img={Partner1}
                    job_title="fOUNDER"
                    title="HIRONAO KUNIMITSU"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                ) : (
                  <PartnerCard
                    bottom={isMediumUp ? "-200px" : "-100px"}
                    img={Top4}
                    job_title="3FINANCIE fOUNDER"
                    title="HIRONAO KUNIMITSU"
                    content="consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  />
                )}
              </div>
            </Item>
          </Grid>
        </Grid>
        <div className="footer-bg">
          <div className="carousel-li">
            <input
              type="radio"
              className="carousel"
              name="carousel"
              onClick={() => setCurrent(1)}
            />
            <input
              type="radio"
              className="carousel"
              name="carousel"
              onClick={() => setCurrent(2)}
            />
            <input
              type="radio"
              className="carousel"
              name="carousel"
              onClick={() => setCurrent(3)}
            />
          </div>
          <Typography
            sx={
              isMediumUp
                ? {
                    fontWeight: "500",
                    fontSize: "40px",
                    lineHeight: "64px",
                    letterSpacing: "20px",
                    paddingTop: "240px",
                    paddingBottom: "20px",
                  }
                : {
                    fontWeight: "500",
                    fontSize: "22px",
                    lineHeight: "64px",
                    letterSpacing: "20px",
                    paddingTop: "130px",
                    paddingBottom: "10px",
                  }
            }
          >
            JOIN OUR COMMUNITY
          </Typography>
          <div style={{ paddingBottom: "30px" }}>
            <IconButton color="primary">
              <XIcon color="primary" />
            </IconButton>
            <IconButton sx={{ color: "green[500]" }}>
              <DiscordIcon color="primary" />
            </IconButton>
          </div>
          <p style={{ fontSize: "20px", lineHeight: "24px" }}>
            &quot;Feel, think, and grow the world with your investments.&quot;
          </p>
          <div style={{ marginTop: "120px" }}>
            <img
              src={apasport_logo}
              style={{ paddingTop: "25px", marginLeft: "180px" }}
            ></img>
            <p>
              Produced by{" "}
              <a
                className="asport"
                href="https://apasport.xyz/"
                style={{
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                &nbsp;APSORT
              </a>
            </p>
          </div>
          <hr />
          <div className="footer">
            <div className="footer-link-group">
              <a className="#">CONTACT</a>
              <a className="#">LEGAL</a>
              <a className="#">TERM OF USE</a>
              <a className="#">PRIVACY POLICY</a>
            </div>
            <p>Copyright © Apasport all rights reserved. &nbsp;</p>
          </div>
        </div>
      </Box>
      {/* </div> */}
    </Layout>
  );
};

export default Home;
