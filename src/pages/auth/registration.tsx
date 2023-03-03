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
import {useRegistrationMutation} from "../../store/services/auth";
import {useDispatch} from "react-redux";
import {setTokens} from "../../store/slices/auth";

const Registration: FC = () => {
    const [registration, {isLoading, error, data}] = useRegistrationMutation();
    const theme = useTheme();
    const dispatch = useDispatch()
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            submit: null
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().max(255).required('First Name is required'),
            lastName: Yup.string().max(255).required('Last Name is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().min(6, 'Password must be longer 6 symbols').max(255).required('Password is required')
        }),
        onSubmit: ({email, password, firstName, lastName}) => registration({email, password, firstName, lastName}),
    })

    const [showPassword, setShowPassword] = useState(false);
    const [agree, setAgree] = useState(true);

    const handleCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setAgree(e.target.checked), [])
    const handleClickShowPassword = () => setShowPassword(!showPassword)

    useEffect(() => {
        if (error || data?.success === false) {
            formik.setErrors({submit: 'registration error'})
        } else if (!error && data?.success && data) {
            dispatch(setTokens({tokens: data.result, remember: true}))
        }
    }, [error, data])

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
                                                    Registration
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
                                    <Grid container spacing={matchDownSM ? 0 : 2}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl
                                                fullWidth
                                                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                                                sx={{...theme.typography.customInput}}
                                            >
                                                <InputLabel htmlFor="outlined-adornment-first-name">
                                                    First Name
                                                </InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-first-name"
                                                    type="text"
                                                    value={formik.values.firstName}
                                                    name="firstName"
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    autoComplete='fname'
                                                    label="First Name"
                                                />
                                                {formik.touched.firstName && formik.errors.firstName && (
                                                    <FormHelperText error id="standard-weight-helper-text-first-name">
                                                        {formik.errors.firstName}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl
                                                fullWidth
                                                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                                                sx={{...theme.typography.customInput}}
                                            >
                                                <InputLabel htmlFor="outlined-adornment-last-name">
                                                    Last Name
                                                </InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-last-name"
                                                    type="text"
                                                    value={formik.values.lastName}
                                                    name="lastName"
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    label="Last Name"
                                                    autoComplete="lname"
                                                />
                                                {formik.touched.lastName && formik.errors.lastName && (
                                                    <FormHelperText error id="standard-weight-helper-text-last-name">
                                                        {formik.errors.lastName}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <FormControl
                                        fullWidth
                                        error={Boolean(formik.touched.email && formik.errors.email)}
                                        sx={{...theme.typography.customInput}}
                                    >
                                        <InputLabel htmlFor="outlined-adornment-email">Email
                                            Address</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-email"
                                            type="email"
                                            value={formik.values.email}
                                            name="email"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            autoComplete='email'
                                            label="Email Address"
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <FormHelperText error id="standard-weight-helper-text-email">
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
                                            htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={formik.values.password}
                                            name="password"
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            autoComplete='password'
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
                                                id="standard-weight-helper-text-password">
                                                {formik.errors.password}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                    <Stack direction="row" alignItems="center" justifyContent="space-between"
                                           spacing={1}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={agree}
                                                    onChange={handleCheckbox}
                                                    name="checked"
                                                    color="primary"
                                                />
                                            }
                                            label={
                                                <Typography variant="subtitle1">
                                                    Agree with &nbsp;
                                                    <Typography variant="subtitle1" component={Link} to="/terms">
                                                        Terms & Condition.
                                                    </Typography>
                                                </Typography>
                                            }
                                        />
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
                                            Sign Up
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
                                            to="/login"
                                            variant="subtitle1"
                                            sx={{textDecoration: 'none'}}
                                        >
                                            Already have an account?
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

export default Registration;