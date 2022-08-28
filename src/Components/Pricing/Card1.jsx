import * as React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function Card1() {
  return (
    <>
      <Card sx={{ minWidth: 300 }}>
        <Stack spacing={2} sx={{ padding: 2 }}>
          <CardContent>
            <Typography variant="h4" color="#000">
              ₹ 0
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              0 % of minimum goal raised
            </Typography>

            <Typography variant="h4" color="#000">
              0
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Total Investors
            </Typography>
            <hr />

            <Typography variant="h4" color="#000">
              0 Days
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Left to Invest
            </Typography>
          </CardContent>
          <Button size="large" variant="contained" color="error">
            Campaign Expired
          </Button>
          <CardActions sx={{ justifyContent: "center" }}>
            <Typography gutterBottom variant="body1">
              ₹ 1000 Minimum Investment
            </Typography>
          </CardActions>
        </Stack>
      </Card>
    </>
  );
}
