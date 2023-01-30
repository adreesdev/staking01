import { createTheme } from "@mui/material/styles";

const themeObj = {
	light: {
		text: {
			primary: "#000",
		},
		background: {
			hard: "#fff",
			medium: "#fdfdfd",
			light: "#efefef",
			borderLight: "#bdbdbd",
			shadow: "#000",
			greenColor: "rgba(27,200,112,1)",
			lightGreen: "rgba(27,200,112,0.2)",
			redColor: "rgba(255,0,51,1)",
			lightRed: "rgba(255,0,51,0.2)",
		},
	},

	dark: {
		text: {
			primary: "#fff",
		},
		background: {
			hard: "#000",
			medium: "#151515",
			light: "#212121",
			borderLight: "#424242",
			shadow: "#000",
			greenColor: "rgba(27,200,112,1)",
			lightGreen: "rgba(27,200,112,0.2)",
			redColor: "rgba(255,0,51,1)",
			lightRed: "rgba(255,0,51,0.2)",
		},
	},
};

export const createCustomTheme = (mode) =>
	createTheme({
		palette: {
			mode,
			...themeObj[mode],
		},
		typography: {
			fontFamily: ['"Poppins"', '"Squada One"', "sans-serif"].join(","),
			h1: {
				fontFamily: '"Squada One", sans-serif',
				fontSize: "4rem",
			},
			h4: {
				fontFamily: '"Poppins", sans-serif',
				fontSize: "1.125rem",
			},
			body1: {
				fontFamily: '"Poppins", sans-serif',
				fontSize: "0.875rem",
			},
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: (theme) => `
		    body {
		      background-color: ${theme.palette.mode === "dark" ? "#131213" : "#fdfdfd"}
		    }
		  `,
			},
			MuiButton: {
				variants: [
					{
						props: { variant: "gradient" },
						style: {
							background:
								"linear-gradient(97.01deg, #6C7DEB 8.16%, #50A6ED 103.71%)",
							boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.3)",
							color: "#fff",
							fontFamily: '"Poppins", sans-serif',
							fontStyle: "normal",
							fontSize: "16px",
							lineHeight: "24px",
							letterSpacing: "0.045em",
							"&:hover": {
								background:
									"linear-gradient(97.01deg, #50A6ED 8.16%, #6C7DEB 103.71%)",
							},
						},
					},
				],
			},
		},
	});
