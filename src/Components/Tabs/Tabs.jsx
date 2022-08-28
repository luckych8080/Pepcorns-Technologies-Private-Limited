import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Comments from "./Comments";
import Pitch from "./Pitch";
import Details from "./Details";

export default function Tabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "divider", color: "#757ce8" }}>
          <TabList
            onChange={handleChange}
            aria-label="pitch detail update comments"
          >
            <Tab label="Pitch" value="1" />
            <Tab label="Details" value="2" />
            <Tab label="Update" value="3" />
            <Tab label="Comments" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Pitch />
        </TabPanel>
        <TabPanel value="2">
          <Details />
        </TabPanel>
        <TabPanel value="3"></TabPanel>
        <TabPanel value="4">
          <Comments />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
