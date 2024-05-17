import React, { useState } from "react";
import CountUp from "react-countup";

import Layout from "@src/layouts/Layout";
import PartnerCard from "@src/components/PartnerCard";
import FaqAccordion from "@src/components/FaqAccordion";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import XIcon from "@mui/icons-material/X";

import Top2 from "@assets/images/Top/Top2.png";
import Top3 from "@assets/images/Top/Top3.png";
import Top4 from "@assets/images/Top/Top4.png";
import logo from "@assets/images/Top/6.png";
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

const Home_JP: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    backgroundColor: "#e8eff5",
    border: "1px solid black",
    borderRadius: "0px",
    height: "100%",
  }));

  return (
    <Layout>
      <div className="bg-Top1">
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
        <p
          style={{
            fontSize: "26px",
            lineHeight: "36px",
            padding: "0px 250px",
          }}
        >
          Helping the world bear fruit with the help of the latest technology
          Investment Platform for a New Era
        </p>
        <p style={{ fontSize: "20px" }}>
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
          <Grid md={12}>
            <Item>
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "18px",
                }}
              >
                OUR PROJECT
              </h2>
            </Item>
          </Grid>
          <Grid item md={6} sx={{ maxHeight: "800px" }}>
            <Item>
              <img src={Top2} style={{ width: "100%" }} />
            </Item>
          </Grid>
          <Grid container md sx={{ maxHeight: "800px" }}>
            <Grid item md={8}>
              <Grid item md>
                <Item
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: "center",
                  }}
                >
                  <h1
                    className="sub-title"
                    style={{ padding: "80px 0px 5px 0px" }}
                  >
                    TUK TUK harvest flow future project
                  </h1>
                  <span
                    className="content"
                    style={{ padding: "0px 0px 10px 30px" }}
                  >
                    Harvest
                    Flowは、投資家に対して単なる金銭的なリターンを超えた価値を提供します。
                    Harvest
                    Flowは、投資家に対して単なる金銭的なリターンを超えた価値を提供します。
                    Harvest
                    Flowは、投資家に対して単なる金銭的なリターンを超えた価値を提供します。
                    Harvest
                    Flowは、投資家に対して単なる金銭的なリターンを超えた価値を提供します。
                    Harvest
                    Flowは、投資家に対して単なる金銭的なリターンを超えた価値を提供します。
                  </span>
                  <Grid container>
                    <Grid item md={4}>
                      <Item>
                        <p
                          style={{
                            fontSize: "15px",
                            borderBottom: "1px dotted #000",
                          }}
                        >
                          APY
                        </p>
                        <p style={{ fontSize: "24px" }}>8%</p>
                      </Item>
                    </Grid>
                    <Grid item md={4}>
                      <Item>
                        <p
                          style={{
                            fontSize: "15px",
                            borderBottom: "1px dotted #000",
                          }}
                        >
                          STATUS
                        </p>
                        <p style={{ fontSize: "24px" }}>OPEN</p>
                      </Item>
                    </Grid>
                    <Grid item md={4}>
                      <Item>
                        <p
                          style={{
                            fontSize: "15px",
                            borderBottom: "1px dotted #000",
                          }}
                        >
                          ASSET TYPE
                        </p>
                        <p style={{ fontSize: "24px" }}>VEHICLE</p>
                      </Item>
                    </Grid>
                  </Grid>
                  <p style={{ padding: "1rem" }}>VIEW MODE</p>
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
                <p>coming soon</p>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md>
            <Item sx={{ overflowY: "scroll", maxHeight: "800px" }}>
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "18px",
                }}
              >
                ABOUT HARVEST FLOW
              </h2>
              <hr style={{ paddingBottom: "120px" }} />
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "500",
                  lineHeight: "36px",
                }}
              >
                An investment experience that transforms society with emotion.
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  padding: "10px",
                }}
              >
                Flowのビジョンは、世界中の「実り」を投資家と共に収穫し、その「流れ」を通じて経済的・社会的な成長を促進することです。私たちは、投資家が自らの行動が実世界でポジティブな変化を生むことを実感できるように、感動と透明性を核とした新時代の投資の形を提案します。
              </p>
            </Item>
          </Grid>
          <Grid item md="auto" sx={{ maxHeight: "800px" }}>
            <Item>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={Top3} style={{ width: "100%" }}></img>
                <img
                  src={about1}
                  style={{ position: "absolute", bottom: "0px", left: "0px" }}
                />
                <img
                  src={about2}
                  style={{ position: "absolute", top: "0px", right: "0px" }}
                />
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
                  ABOUT HARVEST FOLLOW
                </h2>
                <Button
                  variant="contained"
                  style={{
                    position: "absolute",
                    top: "85%",
                    right: "10%",
                    padding: "5px 20px",
                    width: "auto",
                    zIndex: 1,
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  PLAY MOVIE
                </Button>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={6} sx={{ maxHeight: "600px" }}>
            <Item sx={{ maxHeight: "600px" }}>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={bgImg}
                  style={{
                    width: "1000px",
                    height: "600px",
                    backgroundSize: "cover",
                  }}
                ></img>
                <h2
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
                >
                  FEATURE
                </h2>
              </div>
            </Item>
          </Grid>
          <Grid item md={6}>
            <Item sx={{ overflowY: "scroll", maxHeight: "600px" }}>
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "18px",
                }}
              >
                FEATURES
              </h2>
              <hr style={{ paddingBottom: "120px" }} />
              <Grid container>
                <Grid item md={6}>
                  <h1
                    style={{
                      margin: "0px",
                      fontSize: "32px",
                      fontWeight: "500",
                      lineHeight: "36px",
                      padding: "0px 20px 20px 20px",
                    }}
                  >
                    Harvest Flowは、投資家に対して
                    単なる金銭的なリターンを超えた 価値を提供します。
                  </h1>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "18px",
                      paddingLeft: "20px",
                    }}
                  >
                    Harvest
                    Flowは、投資家に対して単なる金銭的なリターンを超えた価値を提供します。それは、全世界の可能性を収穫（Harvest）し、資金が流れる（Flow）ことで社会的、経済的な変化を生み出す新しい形の投資体験です。
                  </p>
                </Grid>
                <Grid item md={6}>
                  <img src={Top4} style={{ width: "70%" }} />
                </Grid>
              </Grid>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "500",
                  lineHeight: "36px",
                  padding: "0px 20px 20px 20px",
                }}
              >
                Harvest Flowは、投資家に対して 単なる金銭的なリターンを超えた
                価値を提供します。
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  padding: "20px",
                }}
              >
                Harvest
                Flowは、投資家に対して単なる金銭的なリターンを超えた価値を提供します。それは、全世界の可能性を収穫（Harvest）し、資金が流れる（Flow）ことで社会的、経済的な変化を生み出す新しい形の投資体験です。
                このプラットフォームを通じて、投資家は心を揺さぶる事業や個々のストーリーに触れ、その資金が具体的に社会にどのような良い影響をもたらしているかをリアルタイムで確認することができます。IoTやNFTなどの最新技術を活用し、投資の流れとその成果を透明にすることで、安心感と共に投資の透明性を実現します。
                Harvest
                Flowは、安定したリターンを求める暗号資産投資家から、社会的意義を重視する投資家まで、さまざまなニーズに応えることができます。現実世界の事業への投資を通じて、低リスクで確実な収益を実現し、手軽な操作で大きな達成感と社会への貢献を体験することができます。
                Harvest
                Flowのビジョンは、世界中の「実り」を投資家と共に収穫し、その「流れ」を通じて経済的・社会的な成長を促進することです。私たちは、投資家が自らの行動が実世界でポジティブな変化を生むことを実感できるように、感動と透明性を核とした新時代の投資の形を提案します。
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={6}>
            <Item sx={{ overflowY: "scroll", maxHeight: "600px" }}>
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "18px",
                }}
              >
                FAQ
              </h2>
              <hr style={{ paddingBottom: "120px" }} />

              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "500",
                  lineHeight: "36px",
                }}
              >
                Harvest Flowではどのような投資スキームが提供されていますか？
              </h1>
              <FaqAccordion
                acc={[
                  { title: "AFEW", content: "Afwefewfew" },
                  { title: "AFEW", content: "Afwefewfew" },
                  { title: "AFEW", content: "Afwefewfew" },
                ]}
              />
            </Item>
          </Grid>
          <Grid item md={6} style={{ overflow: "hidden", maxHeight: "600px" }}>
            <Item>
              <div style={{ position: "relative", overflow: "hidden" }}>
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
                    padding: "5px 20px",
                    width: "auto",
                    zIndex: 1,
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  VIEW MORE
                </Button>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md sx={{ maxHeight: "800px" }}>
            <Item sx={{ maxHeight: "800px" }}>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "500",
                  lineHeight: "36px",
                  padding: "120px 60px 120px 60px",
                  wordSpacing: "20px",
                  letterSpacing: "8px",
                }}
              >
                HOW IT WORKS
              </h1>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  padding: "0 40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna.sed do eiusmod
                tempor incididunt ut labore et dolore magna.
              </p>
            </Item>
          </Grid>
          <Grid item md="auto">
            {/* <Item style={{ maxHeight: "800px" }}>
              <img src={HowToBg2} style={{ width: "100%" }} />
            </Item> */}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid md={12}>
            <Item>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "500",
                  lineHeight: "36px",
                  padding: "60px 60px 60px 60px",
                  wordSpacing: "20px",
                  letterSpacing: "8px",
                  marginBottom: "300px",
                }}
              >
                PARTNER
              </h1>
              <PartnerCard
                bottom="4150px"
                img={Partner1}
                job_title="FINANCIE fOUNDER"
                title=" KUNIMITSU"
                content="Harvest Flowでは、投資家が投資先の事業やエンドユーザーのストーリーに触れることができます。例えば、投資先の事業オーナーやエンドユーザーへのインタビュー動画を視聴することで、投資が実際にどのような人々の役に立っているのかを知ることができます。また、投資家はNFTを通じて、自分が社会貢献に参加していることを実感できます。投資家は、投資を通じて獲得したポイントを、社会貢献度の指標として確認することができ、社会を良い方向に変えていることを体験できます。"
              />
              <div>elkjfel</div>
              <PartnerCard
                bottom="4150px"
                img={Partner1}
                job_title="FINANCIE fOUNDER"
                title="HIRONAO KUNIMITSU"
                content="Harvest Flowでは、投資家が投資先の事業やエンドユーザーのストーリーに触れることができます。例えば、投資先の事業オーナーやエンドユーザーへのインタビュー動画を視聴することで、投資が実際にどのような人々の役に立っているのかを知ることができます。また、投資家はNFTを通じて、自分が社会貢献に参加していることを実感できます。投資家は、投資を通じて獲得したポイントを、社会貢献度の指標として確認することができ、社会を良い方向に変えていることを体験できます。"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className="bg-Top1">
        <div className="carousel-li">
          <input type="radio" className="carousel" name="carousel" />
          <input type="radio" className="carousel" name="carousel" />
          <input type="radio" className="carousel" name="carousel" />
        </div>
        <Typography
          sx={{
            paddingBottom: "40px",
            fontWeight: "500",
            fontSize: "40px",
            lineHeight: "64px",
            letterSpacing: "20px",
          }}
        >
          JOIN OUR COMMUNITY
        </Typography>
        <div>
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
        <img
          src={apasport_logo}
          style={{ paddingTop: "25px", marginLeft: "180px" }}
        ></img>
        <p style={{ marginTop: "0px" }}>
          Produced by{" "}
          <span className="asport" style={{ color: "white" }}>
            &nbsp;APSORT
          </span>
        </p>

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
    </Layout>
  );
};

export default Home_JP;
