import React, {FC, useCallback, useEffect, useState} from "react";
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
import AuthLayout from "../../layouts/auth/auth";
import AuthCardLayout from "../../layouts/auth/authCard";
import {useFormik} from "formik";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {useLoginMutation} from "../../store/services/auth";
import {useDispatch} from "react-redux";
import {setTokens} from "../../store/slices/auth";

const Login: FC = () => {
    const [login, {isLoading, error, data}] = useLoginMutation();
    const theme = useTheme();
    const dispatch = useDispatch()
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            submit: null
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().min(6).max(255).required('Password is required')
        }),
        onSubmit: ({email, password}) => login({email, password}),
    })

    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(true);

    const handleCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setRemember(e.target.checked), [])
    const handleClickShowPassword = () => setShowPassword(!showPassword)

    useEffect(() => {
        if (error || data?.success === false) {
            formik.setErrors({submit: 'login error'})
        } else if (!error && data?.success && data) {
            dispatch(setTokens({tokens: data.result, remember}))
        }
    }, [error, data, remember])

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
                                <form
                                    noValidate
                                    onSubmit={formik.handleSubmit}
                                >
                                    <FormControl
                                        fullWidth
                                        error={Boolean(formik.touched.email && formik.errors.email)}
                                        sx={{...theme.typography.customInput}}
                                    >
                                        <InputLabel htmlFor="outlined-adornment-email-login">Email
                                            Address</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-email-login"
                                            type="email"
                                            value={formik.values.email}
                                            name="email"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            autoComplete='off'
                                            label="Email Address"
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {formik.errors.email}
                                            </FormHelperText>
                                        )}
                                    </FormControl>

                                    <FormControl
                                        fullWidth
                                        error={Boolean(formik.touched.password && formik.errors.password)}
                                        sx={{...theme.typography.customInput}}
                                    >
                                        <InputLabel
                                            htmlFor="outlined-adornment-password-login">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password-login"
                                            type={showPassword ? 'text' : 'password'}
                                            value={formik.values.password}
                                            name="password"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
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
                                        {formik.touched.password && formik.errors.password && (
                                            <FormHelperText
                                                error
                                                id="standard-weight-helper-text-password-login">
                                                {formik.errors.password}
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
                                    {formik.errors.submit && (
                                        <Box>
                                            <FormHelperText error>
                                                {formik.errors.submit}
                                            </FormHelperText>
                                        </Box>
                                    )}

                                    <Box sx={{mt: 2}}>
                                        <Button
                                            disableElevation
                                            disabled={isLoading}
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