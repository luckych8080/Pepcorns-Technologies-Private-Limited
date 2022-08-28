import * as React from "react";
import { Alert, Button, Stack, Box } from "@mui/material";

export default function Comments() {
  return (
    <Stack spacing={2}>
      <Alert severity="" sx={{ backgroundColor: "#757ce8", color: "#ffffff" }}>
        Not Comments found! Add one
      </Alert>
      <Box sx={{display:"flex", justifyContent:"flex-end"}}>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#757ce8" }}
        >
          Comment
        </Button>
      </Box>
    </Stack>
  );
}
