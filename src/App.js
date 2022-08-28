import { Container, Grid, Stack } from "@mui/material";
import "./App.css";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Tabs from "./Components/Tabs/Tabs";

function App() {
  return (
    <>
      <Navbar />

      <Container
        maxWidth="lg"
        style={{
          marginBottom: "10px",
          marginTop: "80px",
          justifyContent: "space-around",
        }}
      >
        <Stack spacing={2} sx={{ display: { xs: "flex", md: "none" } }}>
          <About />
          <Pricing />
          <Tabs />
        </Stack>

        <Grid
          container
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        >
          <Grid item xs={8}>
            <Stack spacing={2}>
              <About />
              <Tabs />
            </Stack>
          </Grid>

          <Grid item xs={4}>
            <Pricing />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
