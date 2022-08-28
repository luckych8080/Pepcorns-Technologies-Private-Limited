import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Details() {
  return (
    <Stack spacing={2}>
      <Paper>
        <Card sx={{ minWidth: 300 }}>
          <Stack spacing={2} sx={{ margin: "auto" }}>
            <CardContent sx={{ margin: "auto" }}>
              <Avatar
                sx={{
                  height: "140px",
                  width: "140px",
                  margin: "auto",
                  marginBottom: 1,
                }}
                alt="Remy Sharp"
                src="https://api.pepcorns.com/clientassets/icon1651231237314.jpg"
              />
              <Typography fontWeight={700} variant="h4" color="text.secondary">
                Manish Pratik
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ paddingLeft: 7 }}
                gutterBottom
              >
                CoFounder
              </Typography>
              <Typography sx={{ paddingLeft: 7, color: "#03a9f4" }}>
                <FacebookIcon fontSize="large" />
                <InstagramIcon fontSize="large" sx={{ color: "#bd4378" }} />
                <LinkedInIcon fontSize="large" />
              </Typography>
            </CardContent>
          </Stack>
        </Card>
      </Paper>

      <Paper>
        <Card sx={{ minWidth: 300 }}>
          <Stack spacing={2} sx={{ margin: "auto" }}>
            <CardContent sx={{ margin: "auto" }}>
              <Avatar
                sx={{
                  height: "140px",
                  width: "140px",
                  margin: "auto",
                  marginBottom: 1,
                }}
                alt="Remy Sharp"
                src="https://api.pepcorns.com/clientassets/icon1651243119561.jpg"
              />
              <Typography fontWeight={700} variant="h4" color="text.secondary">
                Gautam Menon
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ paddingLeft: 7 }}
                gutterBottom
              >
                CoFounder
              </Typography>
              <Typography sx={{ paddingLeft: 7, color: "#03a9f4" }}>
                <FacebookIcon fontSize="large" />
                <InstagramIcon fontSize="large" sx={{ color: "#bd4378" }} />
                <LinkedInIcon fontSize="large" />
              </Typography>
            </CardContent>
          </Stack>
        </Card>
      </Paper>

      <Paper>
        <Card sx={{ minWidth: 300 }}>
          <CardContent sx={{ margin: "auto" }}>
            <Typography fontWeight={700} variant="h6" color="text.secondary">
              How will we use funds : Sales & Marketing - 50% | Human
              Resource-30% | Technology -10% | OPEX-10%
            </Typography>
          </CardContent>
        </Card>
      </Paper>

      <Paper>
        <Card sx={{ minWidth: 300 }}>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={700}
              color="text.secondary"
              gutterBottom
            >
              START DATE
            </Typography>
            <Typography
              fontWeight={700}
              variant="h4"
              color="text.secondary"
              gutterBottom
            >
              2022-06-26 16:38:05
            </Typography>

            <Typography variant="h6" sx={{ color: "green" }}>
              <ArrowUpwardIcon />
              0% Ends in 0 Days
            </Typography>
          </CardContent>
        </Card>
      </Paper>

      <Paper>
        <Card sx={{ minWidth: 300 }}>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={700}
              color="text.secondary"
              gutterBottom
            >
              TARGET RAISE
            </Typography>
            <Typography
              fontWeight={700}
              variant="h4"
              color="text.secondary"
              gutterBottom
            >
              5000000
            </Typography>

            <Typography variant="h6" sx={{ color: "green" }}>
              <ArrowUpwardIcon />
              0% Raised So far
            </Typography>
          </CardContent>
        </Card>
      </Paper>

      <Paper>
        <Card sx={{ minWidth: 300 }}>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={700}
              color="text.secondary"
              gutterBottom
            >
              Frequently Asked Question
            </Typography>

            <Typography fontWeight={500} variant="body1" color="text.secondary">
              What does your company do ?
            </Typography>

            <Typography
              variant="body2"
              fontWeight={400}
              sx={{ paddingBottom: 2 }}
              gutterBottom
            >
              LetzRent is an online search, compare & booking platform for
              self-drive car rental that rewards users for renting. We aggregate
              rental deals from multiple service providers and present them to
              users with prices, reviews & facts to make an informed decision.
              Currently running a pilot in Bangalore by aggregating Zoomcar,
              Avis, Mychoize & Wowcarz.
            </Typography>

            <Typography fontWeight={500} variant="body1" color="text.secondary">
              Where do you want to be in 5 years ?
            </Typography>

            <Typography
              variant="body2"
              fontWeight={400}
              sx={{ paddingBottom: 2 }}
              gutterBottom
            >
              Uber for Self Drive Car Rental
            </Typography>

            <Typography fontWeight={500} variant="body1" color="text.secondary">
              Why did you choose this idea, what's your biggest Obstacle?
            </Typography>

            <Typography variant="body2" fontWeight={400} sx={{}} gutterBottom>
              Customers want low Prices: And to get low prices 85% of the
              consumers check at least 2 data points (Source: BCG Consumer
              Trends). In various sectors information-centred buying has been
              made more efficient by companies like MMT for Travel, Policy
              bazaar for Insurance, Myntra or Shopperstop for Lifestyle
              products. However, for rental products, there is no one & to fill
              this need and make the process efficient we launched Letzrent,
              hoping to have a first-mover advantage and dominate the market.
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Stack>
  );
}
