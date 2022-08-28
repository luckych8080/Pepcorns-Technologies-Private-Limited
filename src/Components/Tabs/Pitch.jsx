import * as React from "react";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  Paper,
} from "@mui/material";

export default function Pitch() {
  return (
    <Stack spacing={2}>
      <Paper>
        <Card sx={{ minWidth: 300 }}>
          <Stack spacing={2}>
            <CardContent>
              <Stack
                spacing={2}
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography fontWeight={700} variant="h4">
                  Deck
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ paddingLeft: 7 }}
                  gutterBottom
                >
                  <Button
                    href="https://api.pepcorns.com/clientassets/icon1651230174497.pdf"
                    variant="contained"
                    sx={{ backgroundColor: "#757ce8" }}
                  >
                    Download Pitch Deck
                  </Button>
                </Typography>
              </Stack>

              <hr />

              <Stack spacing={1} sx={{ paddingY: 3 }}>
                <Typography fontWeight={500} variant="body2">
                  10 Seconds Pitch
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={500}
                  gutterBottom
                >
                  Online search, compare & booking platform for self-drive cars,
                  charter flights, living space & more that rewards users.
                </Typography>
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Highlights
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={500}
                >
                  • Running profitable pilot in Bengaluru.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={500}
                >
                  • 20k+ registered users, 4.2 app rating and 10k+ social media
                  following .
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={500}
                >
                  • Company is projecting 100cr+ transaction volume in 5 years.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={500}
                >
                  • Founder with the marketing expertise of 17+ years in
                  Reliance, Naaptol, Tv9 and Zee and more.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={500}
                >
                  • GenZ CTO and co-founder.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={500}
                >
                  • Expansion is easy and the untapped customer base is huge.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={500}
                  gutterBottom
                >
                  • Been in news articles, already making buzz.
                </Typography>
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Traction
                </Typography>
                <img
                  src="https://images.unlayer.com/projects/15608/1651352968445-10.PNG"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Smarter Way To Rent
                </Typography>
                <img
                  src="https://images.unlayer.com/projects/15608/1651352942115-6.png"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Customers Want Low Prices
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={300}
                  gutterBottom
                >
                  To get low prices 85% of the consumers check at least 2 data
                  points (Source: BCG Consumer Trends). In various sectors
                  information centred buying has been made more efficient by
                  companies like MMT for Travel, Policy bazaar for Insurance,
                  Myntra or Shopperstop for Lifestyle products. However for
                  rental products, there is no one & to fill this need and make
                  the process efficient we launched LetzRent, hoping to have a
                  first-mover advantage and dominate the market in the coming
                  future.
                </Typography>
                <img
                  src="https://images.unlayer.com/projects/15608/1651352925215-3.PNG"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Single KYC
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={300}
                  gutterBottom
                >
                  Renting is a KYC dependent process, every time a customer
                  books a service from a different service provider he/she will
                  have to get a new KYC done. With Letzrent, the hassle of
                  multiple KYC gets removed and with a single KYC, customers can
                  rent from multiple brands.
                </Typography>
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Vast Selection
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={300}
                  gutterBottom
                >
                  Being an aggregator Letzrent offers more options than category
                  leaders.
                </Typography>
                <img
                  src="https://images.unlayer.com/projects/15608/1651352918059-2.png"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Why Renting?
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={300}
                  gutterBottom
                >
                  1. Demographic Twist: Commitment phobic millennials prefer an
                  asset lite life with a bias toward renting rather than buying.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={300}
                  gutterBottom
                >
                  2. Flexibility: Renting allows people to upgrade or change
                  assets easily.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight={300}
                  gutterBottom
                >
                  3. Convenience: With the rental customers dispense with the
                  headache of down payment, maintenance, insurance etc.
                </Typography>
                <img
                  src="https://images.unlayer.com/projects/15608/1651352954073-8.png"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Market Size
                </Typography>

                <img
                  src="https://images.unlayer.com/projects/15608/1651352961142-9.png"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Competitors
                </Typography>

                <img
                  src="https://images.unlayer.com/projects/15608/1651352937596-5.PNG"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Feedback: People love us
                </Typography>

                <img
                  src="https://images.unlayer.com/projects/15608/1651352929580-4.PNG"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Future and growth
                </Typography>
                {/* <img
                  src="https://images.unlayer.com/projects/15608/1651352907089-1.PNG"
                  alt="setup"
                /> */}

                <img
                  src="https://images.unlayer.com/projects/15608/1651352949305-7.png"
                  alt="setup"
                />
              </Stack>

              <hr />

              <Stack spacing={0} sx={{ paddingY: 3 }}>
                <Typography fontWeight={700} variant="h5" gutterBottom>
                  Core Team
                </Typography>

                <img
                  src="https://images.unlayer.com/projects/15608/1651352986615-11.png"
                  alt="setup"
                />
              </Stack>

              <Stack spacing={0} sx={{ paddingY: 2 }}>
                <Typography fontWeight={700} variant="h5">
                  Documents for Investors
                </Typography>

                <ul>
                  <a href="https://drive.google.com/file/d/1clHQGD__nkbsA-cLz3A6_tABUuk5rl3w/view">
                    <li>Due Diligence Report</li>
                  </a>
                  <a href="https://drive.google.com/file/d/1i02nUH-27EhiROtNlvXOfkPP7iTfwjpw/view">
                    <li>Certificate of Incorporation</li>
                  </a>
                </ul>
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Paper>
    </Stack>
  );
}
