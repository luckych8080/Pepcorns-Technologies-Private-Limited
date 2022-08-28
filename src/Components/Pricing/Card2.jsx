import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Card, CardContent, Stack, Typography, Button } from "@mui/material";

export default function Card2() {
  return (
    <>
      <Card sx={{ minWidth: 300 }}>
        <Stack spacing={2} sx={{ padding: 2 }}>
          <CardContent>
            <Typography fontWeight={700} variant="h4" color="text.secondary">
              ₹ 2,000
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Invest
            </Typography>
            <Typography fontWeight={400} variant="body1" color="text.secondary">
              • LetzRent Premium Apparel (T-shirts & Coffee Mug).
            </Typography>
            <Typography
              fontWeight={400}
              variant="body1"
              color="text.secondary"
              gutterBottom
            >
              • Early access to new features & promotions.
            </Typography>

            <Typography fontWeight={400} variant="body1" color="text.secondary">
              TNC : Limited to the first 100.
            </Typography>
          </CardContent>

          <Button
            size="large"
            variant="contained"
            sx={{ backgroundColor: "#757ce8" }}
          >
            Invest
          </Button>
        </Stack>
      </Card>
    </>
  );
}
