import { Box, Container, Grid, InputBase, Stack } from "@mui/material";
import React from "react";
import CardTopV from "../../assets/CardTopV.png";
import CardButton from "../../assets/CardButton.png";

export default function Cards() {
	const data = [{}, {}, {}, {}, {}];
	return (
		<Box my={{ xs: 5, md: 10 }}>
			<Container>
				<Grid container spacing={5}>
					{data.map((value, i) => (
						<Grid item xs={12} sm={6} md={4} key={i}>
							<Box
								p={1}
								border="1px solid green"
								textAlign="center"
								bgcolor="#2AFC9509"
							>
								<Box
									width="80%"
									mx="auto"
									mt={-1.8}
									sx={{
										padding: { xs: "10px 15px", md: "15px 20px" },
										background: `url(${CardTopV})`,
										backgroundRepeat: "no-repeat",
										backgroundPosition: "center center",
										backgroundSize: "100% 100%",
										fontWeight: "900",
										fontSize: { xs: "18px", md: "22px" },
									}}
								>
									Plan {i + 1}
								</Box>
								<Stack
									px={2}
									mt={5}
									direction="row"
									justifyContent="space-between"
								>
									<Box>
										<Box
											sx={{
												fontWeight: "400",
												fontSize: "16px",
												color: "#fff",
											}}
										>
											Daily Profit
										</Box>
										<Box
											sx={{
												fontWeight: "700",
												fontSize: "24px",
												color: "green",
											}}
										>
											0%
										</Box>
									</Box>
									<Box textAlign="center">
										<Box
											sx={{
												fontWeight: "400",
												fontSize: "16px",
												color: "#fff",
											}}
										>
											Total Return
										</Box>
										<Box
											sx={{
												fontWeight: "700",
												fontSize: "24px",
												color: "green",
											}}
										>
											0%
										</Box>
									</Box>
								</Stack>
								<Stack
									px={2}
									mt={2}
									direction="row"
									justifyContent="space-between"
								>
									<Box>
										<Box
											sx={{
												fontWeight: "400",
												fontSize: "16px",
												color: "#fff",
											}}
										>
											Withdraw time
										</Box>
										<Box
											sx={{
												fontWeight: "700",
												fontSize: "24px",
												color: "green",
											}}
										>
											Anytime
										</Box>
									</Box>
									<Box textAlign="center">
										<Box
											sx={{
												fontWeight: "400",
												fontSize: "16px",
												color: "#fff",
											}}
										>
											Days
										</Box>
										<Box
											sx={{
												fontWeight: "700",
												fontSize: "24px",
												color: "green",
											}}
										>
											14
										</Box>
									</Box>
								</Stack>
								<Box mt={3} sx={{ fontWeight: "400", fontSize: "16px" }}>
									In 14 days you will get
								</Box>
								<InputBase
									readOnly
									value="20"
									sx={{
										px: 1,
										mt: 0.4,
										mx: "auto",
										textAlign: "center",
										width: "90%",
										border: "1px solid green",
										bgcolor: "#2AFC9509",
										color: "green",
										fontSize: "24px",
									}}
								/>
								<Box mt={3} sx={{ fontWeight: "400", fontSize: "16px" }}>
									Enter Amount
								</Box>
								<InputBase
									value="20"
									sx={{
										px: 1,
										mt: 0.4,
										mx: "auto",
										width: "90%",
										border: "1px solid green",
										textAlign: "center",
										bgcolor: "#2AFC9509",
										color: "green",
										fontSize: "24px",
									}}
								/>
								<Box
									width="90%"
									my={3}
									mx="auto"
									sx={{
										padding: "22px 20px",
										background: `url(${CardButton})`,
										backgroundRepeat: "no-repeat",
										backgroundPosition: "center center",
										backgroundSize: "100% 100%",
										fontSize: { xs: "14px ", md: "16px" },
										fontWeight: { xs: 600, md: 700 },
									}}
								>
									Stack BNB
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
