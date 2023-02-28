import React, {FC, useCallback, useMemo, useState} from "react";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import AuthLayout from "../../../layouts/auth/auth";
import AuthCardLayout from "../../../layouts/auth/authCard";
import {Formik} from "formik";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {FormikHelpers} from "formik/dist/types";

const Login: FC = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(true);

    const formikDefaultValue = useMemo(() => ({
        email: '',
        password: '',
        submit: null
    }), []);
    const yupValidationSchema = useMemo(() => Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().min(6).max(255).required('Password is required')
    }), []);

    const handleSubmit = useCallback(
        (
            values: typeof formikDefaultValue,
            {setErrors, setStatus, setSubmitting}: FormikHelpers<typeof formikDefaultValue>
        ) => {

        }, [])
    const handleCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setRemember(e.target.checked), [])
    const handleClickShowPassword = () => setShowPassword(!showPassword)

    return (
        <AuthLayout>
            <Grid container direction="column" justifyContent="flex-end" sx={{minHeight: '100vh'}}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{minHeight: 'calc(100vh - 68px)'}}>
                        <Grid item sx={{m: {xs: 1, sm: 3}, mb: 0}}>
                            <AuthCardLayout>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction={matchDownSM ? 'column-reverse' : 'row'}
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Grid item>
                                            <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                <Typography
                                                    color={theme.palette.secondary.main}
                                                    gutterBottom
                                                    variant={matchDownSM ? 'h3' : 'h2'}
                                                >
                                                    Hi, Welcome Back
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    fontSize="16px"
                                                    textAlign={matchDownSM ? 'center' : 'inherit'}
                                                >
                                                    Enter your credentials to continue
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} mb={2} mt={2}>
                                    <Divider/>
                                </Grid>
                                <Formik
                                    validationSchema={yupValidationSchema}
                                    initialValues={formikDefaultValue}
                                    onSubmit={handleSubmit}
                                >
                                    {({
                                          errors,
                                          handleBlur,
                                          handleChange,
                                          handleSubmit,
                                          isSubmitting,
                                          touched,
                                          values
                                      }) => (
                                        <form noValidate
                                              onSubmit={handleSubmit}
                                        >
                                            <FormControl
                                                fullWidth
                                                error={Boolean(touched.email && errors.email)}
                                                sx={{...theme.typography.customInput}}

                                            >
                                                <InputLabel htmlFor="outlined-adornment-email-login">Email
                                                    Address</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-email-login"
                                                    type="email"
                                                    value={values.email}
                                                    name="email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    autoComplete='off'
                                                    label="Email Address"
                                                />
                                                {touched.email && errors.email && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {errors.email}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>

                                            <FormControl
                                                fullWidth
                                                error={Boolean(touched.password && errors.password)}
                                                sx={{...theme.typography.customInput}}
                                            >
                                                <InputLabel
                                                    htmlFor="outlined-adornment-password-login">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password-login"
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    name="password"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    autoComplete='off'
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                edge="end"
                                                                size="large"
                                                            >
                                                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                />
                                                {touched.password && errors.password && (
                                                    <FormHelperText
                                                        error
                                                        id="standard-weight-helper-text-password-login">
                                                        {errors.password}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                            <Stack direction="row" alignItems="center" justifyContent="space-between"
                                                   spacing={1}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={remember}
                                                            onChange={handleCheckbox}
                                                            name="checked"
                                                            color="primary"
                                                        />
                                                    }
                                                    label="Remember me"
                                                />
                                                <Typography
                                                    variant="subtitle1"
                                                    color="secondary"
                                                    sx={{textDecoration: 'none', cursor: 'pointer'}}>
                                                    Forgot Password?
                                                </Typography>
                                            </Stack>
                                            {errors.submit && (
                                                <Box sx={{mt: 3}}>
                                                    <FormHelperText error>
                                                        {errors.submit}
                                                    </FormHelperText>
                                                </Box>
                                            )}

                                            <Box sx={{mt: 2}}>
                                                <Button
                                                    disableElevation
                                                    disabled={isSubmitting}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="secondary"
                                                >
                                                    Sign in
                                                </Button>
                                            </Box>
                                        </form>
                                    )}
                                </Formik>
                                <Grid item xs={12} mb={2} mt={2}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid item container direction="column" alignItems="center" xs={12}>
                                        <Typography
                                            component={Link}
                                            to="/registration"
                                            variant="subtitle1"
                                            sx={{textDecoration: 'none'}}
                                        >
                                            Don&apos;t have an account?
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </AuthCardLayout>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthLayout>
    )
}

export default Login;