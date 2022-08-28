import * as React from "react";
import {
  IconButton,
  Typography,
  Tooltip,
  Stack,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";
import YoutubeEmbed from "./YoutubeEmbed";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function About() {
  return (
    <Stack spacing={2}>
      <Paper elevation={3} sx={{ margin: "auto" }}>
        <Card sx={{ maxWidth: 800 }}>
          <CardMedia
            component="img"
            height="400"
            image="https://api.pepcorns.com/clientassets/icon1651230435196.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              fontWeight={700}
            >
              Letzrent
            </Typography>

            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              component="div"
              fontWeight={500}
            >
              Address : Mumbai, Maharashtra
            </Typography>

            <Typography
              gutterBottom
              sx={{ fontSize: 16 }}
              color="text.secondary"
              fontWeight={500}
            >
              PAN/TAN : AAJCR3294F
            </Typography>

            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              fontWeight={500}
            >
              About : Online search, compare and booking platform for self-drive
              cars, charter flights, living space and more that rewards users.
            </Typography>
          </CardContent>
          <CardContent>
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid #000000",
                  backgroundcolor: "#ae6a72",
                  color: "#000000",
                  backgroundColor: "#ef9a9a",
                }}
              >
                GEN Z FOUNDER
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "#000000",
                }}
              >
                MOBILITY
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "#000000",
                }}
              >
                E-COMMERCE
              </Button>
            </Stack>
          </CardContent>

          <CardActions>
            <Tooltip title="Share">
              <IconButton size="small">
                <ShareIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Follow">
              <IconButton size="medium">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Facebook">
              <IconButton
                href="https://www.facebook.com/LetzRent.official/"
                size="medium"
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton
                size="medium"
                href="https://www.instagram.com/letzrent.official/"
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="youtube">
              <IconButton
                href="https://www.youtube.com/watch?v=biGcDeB2PbQ"
                size="medium"
              >
                <YouTubeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Website">
              <IconButton href="https://letzrent.com" size="medium">
                <LinkIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </Paper>

      <Paper elevation={3}>
        <YoutubeEmbed />
      </Paper>
    </Stack>
  );
}
