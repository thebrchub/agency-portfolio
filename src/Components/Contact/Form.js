import { useState } from 'react';
import {
    Box,
    Grid,
    InputBase,
    InputAdornment,
    ButtonBase,
    Typography,
    CircularProgress
} from "@mui/material";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

// Icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ErrorIcon from '@mui/icons-material/Error';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

// Styles
import styles from "Styles/Contact/Form.styles";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data, e) => {
        setLoading(true);
        emailjs.sendForm('service_p6xyx8c', 'template_a83tz89', e.target, 'user_a3mibtvU72r4yERjbA9dj')
            .then(() => {
                setLoading(false);
                setSuccess(true);
                setMessage('Email received! We will contact you soon.');
                reset();
            })
            .catch(() => {
                setLoading(false);
                setSuccess(false);
                setMessage('Something went wrong. Try again!');
            });
    };

    return (
        <Box sx={{ mt: "3em" }} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                {/* Full Name */}
                <Grid item md={6} xxs={12}>
                    <InputBase
                        placeholder="Your Full Name"
                        endAdornment={
                            <InputAdornment position="end">
                                <Box sx={styles.Icon}>
                                    <PersonOutlineOutlinedIcon />
                                </Box>
                            </InputAdornment>
                        }
                        sx={styles.InputField}
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                            <ErrorIcon /> Please enter your name!
                        </Typography>
                    )}
                </Grid>

                {/* Phone Number */}
                <Grid item md={6} xxs={12}>
    <Box sx={{ display: 'flex', gap: 1 }}>
        {/* Country Code */}
        <InputBase
            placeholder="+91"
            sx={{
                ...styles.InputField,
                width: "100px"
            }}
            {...register('countryCode', {
                required: 'Enter country code!',
                pattern: {
                    value: /^\+\d{1,4}$/,
                    message: 'Enter a valid code like +91 or +1',
                },
            })}
        />
        
        {/* Phone Number */}
        <InputBase
            placeholder="Phone Number"
            endAdornment={
                <InputAdornment position="end">
                    <Box sx={styles.Icon}>
                        <PhoneIphoneIcon />
                    </Box>
                </InputAdornment>
            }
            sx={{ ...styles.InputField, flexGrow: 1 }}
            {...register('phone', {
                required: 'Enter your phone number!',
                pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Enter a valid 10-digit number!',
                },
            })}
        />
    </Box>

    {/* Validation Errors */}
    {(errors.countryCode || errors.phone) && (
        <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
            <ErrorIcon /> {errors.countryCode?.message || errors.phone?.message}
        </Typography>
    )}
</Grid>

                {/* Email */}
                <Grid item md={6} xxs={12}>
                    <InputBase
                        placeholder="Email Address"
                        endAdornment={
                            <InputAdornment position="end">
                                <Box sx={styles.Icon}>
                                    <MailOutlineIcon />
                                </Box>
                            </InputAdornment>
                        }
                        sx={styles.InputField}
                        {...register('email', {
                            required: 'Please enter an email address!',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'The email you entered is invalid!',
                            }
                        })}
                    />
                    {errors.email && (
                        <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                            <ErrorIcon /> {errors.email.message}
                        </Typography>
                    )}
                </Grid>

                {/* Message */}
                <Grid item md={6} xxs={12}>
                    <InputBase
                        placeholder="Write Message"
                        multiline
                        minRows={1.5}
                        maxRows={5}
                        sx={styles.MessageFiled}
                        {...register('message', {
                            required: 'Please add your message!',
                            minLength: {
                                value: 25,
                                message: 'Message should be at least 25 characters!',
                            },
                            maxLength: {
                                value: 1000,
                                message: 'Message should not exceed 1000 characters!',
                            }
                        })}
                    />
                    {errors.message && (
                        <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                            <ErrorIcon /> {errors.message.message}
                        </Typography>
                    )}
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                    <Box textAlign="center">
                        <ButtonBase
                            type="submit"
                            sx={{
                                ...styles.SubmitButton,
                                backgroundColor: success ? "primary.success" : "primary.main"
                            }}
                        >
                            {!loading && !message && (
                                <>
                                    Send Message <ArrowForwardTwoToneIcon className="css-svg-icon" />
                                </>
                            )}
                            {loading && (
                                <CircularProgress sx={{ color: "background.default" }} size={22} />
                            )}
                            {message && !loading && (
                                <>
                                    {success ? (
                                        <DoneIcon sx={{ fontSize: "35px" }} />
                                    ) : (
                                        <CloseIcon sx={{ fontSize: "35px" }} />
                                    )}
                                    
                                </>
                            )}
                        </ButtonBase>

                        {/* Message Status */}
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{
                                ...styles.SendText,
                                color: success ? "primary.success" : "primary.main"
                            }}
                        >
                            {message}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
