import { Box, Grid, Typography } from "@mui/material";

//Images
import Gallery1 from "Assets/footer/footer-1.png";
import Gallery2 from "Assets/footer/footer-2.png";
import Gallery3 from "Assets/footer/footer-3.png";
import Gallery4 from "Assets/footer/footer-4.png";

//Styles
import styles from "Styles/Footer/FooterFour.styles";

const FooterFour = () => {
    return (
        <Box>
            {/* <Typography variant="h6" component="h6" sx={styles.Title}>
                Our Members
            </Typography>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xxs={6}>
                        <Box component="img" src={Gallery1} sx={styles.Image} alt="Gallery" />
                    </Grid>
                    <Grid item xxs={6}>
                        <Box component="img" src={Gallery2} sx={styles.Image} alt="Gallery" />
                    </Grid>
                    <Grid item xxs={6}>
                        <Box component="img" src={Gallery3} sx={styles.Image} alt="Gallery" />
                    </Grid>
                    <Grid item xxs={6}>
                        <Box component="img" src={Gallery4} sx={styles.Image} alt="Gallery" />
                    </Grid>
                </Grid>
            </Box> */}
             <Box>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Blazing Render Creation Hub LLP started as an Animation & VFX agency, fueled by creativity and passion. Over time, we expanded into web services, combining artistic vision with modern tech. Today, we deliver high-end Web Development, UI/UX, Mobile Apps, and Digital Marketing solutions — all from the heart of Ballari, Karnataka.
            </Typography>
        </Box>
        </Box>
    );
};
export default FooterFour;