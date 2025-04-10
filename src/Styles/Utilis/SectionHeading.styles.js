import { AlignHorizontalCenter } from "@mui/icons-material";

const styles = {
    Heading: {
        width: "max-content",
        fontWeight: 1000,
        textAlign: "center", 
        letterSpacing: "1px",
        fontSize: {
            sm: "2em",
            xxs: "1.2rem"
        },
        margin: "0 auto", // Centers the whole element in the parent container
        display: "block", // Ensure it behaves like a block-level element
    },
    Divider: {
        mx: "24%",
        borderWidth: "2px",
        borderColor: "primary.main",
        mt: "5px"
    }
};

export default styles;