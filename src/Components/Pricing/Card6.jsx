import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Card, CardContent, Stack, Typography, Button } from "@mui/material";

export default function Card6() {
  return (
    <>
      <Card sx={{ minWidth: 300 }}>
        <Stack spacing={2} sx={{ padding: 2 }}>
          <CardContent>
            <Typography fontWeight={700} variant="h4" color="text.secondary">
              ₹ 50,000
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Invest
            </Typography>
            <Typography fontWeight={400} variant="body1" color="text.secondary">
              • Exclusive interest in owning equity with an investment of
              ₹11,00,000 — ₹30,00,000.
            </Typography>
            <Typography fontWeight={400} variant="body1" color="text.secondary">
              • In-Person dinner with Co-Founder in Whitefield, Bangalore.
            </Typography>
            <Typography fontWeight={400} variant="body1" color="text.secondary">
              • One-on-one 30 minute video call with Co-Founders.
            </Typography>

            <Typography fontWeight={400} variant="body1" color="text.secondary">
              • Invite to exclusive LetzRent team chat.
            </Typography>

            <Typography fontWeight={400} variant="body1" color="text.secondary">
              • LetzRent Premium Apparel Box (T-shirts, Sweatshirts & additional
              Swag).
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
              TNC : Equity benefits with voting rights. Limited to the first 5
              investors.
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
