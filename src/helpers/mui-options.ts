import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 600, md: 1024, lg: 1440, xl: 1920 },
  },
});

export const miuCustomColumns = { xs: 4, sm: 4, md: 8, lg: 12, xl: 12 };
