import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <Typography variant="h4" pb="40px" mt="20px">
          Made with ❤️ by Shahriar Tamjid
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;