import * as React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import { Stack, Paper, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";

export default function Pricing() {
  return (
    <Stack spacing={2}>
      <Paper elevation={3}>
        <Card1 />
      </Paper>
      <Typography variant="h4" fontWeight={700} sx={{ margin: 0, padding: 0 }}>
        Deal Terms
        <Typography
          sx={{ fontSize: 16 }}
          color="text.secondary"
          gutterBottom
          fontWeight={400}
        >
          Perks you will receive for Investing Letzrent
        </Typography>
      </Typography>

      <Stack spacing={2}>
        <Paper elevation={3}>
          <Card2 />
        </Paper>
        <Paper elevation={3}>
          <Card3 />
        </Paper>
        <Paper elevation={3}>
          <Card4 />
        </Paper>
        <Paper elevation={3}>
          <Card5 />
        </Paper>
        <Paper elevation={3}>
          <Card6 />
        </Paper>
        <Paper elevation={3}>
          <Card7 />
        </Paper>
      </Stack>
    </Stack>
  );
}
