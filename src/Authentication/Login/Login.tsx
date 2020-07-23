import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import SocialLogin from "../components/SocialLogin";
import TextInput from "../components/Form/TextInput";
import { Container, Button } from "../../Components";
import { Box, Text } from "../../Components/Theme";
import CheckBox from "../components/Form/CheckBox";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center" marginBottom="s">
        <Button variant="transparent" onPress={() => alert("SignUp")}>
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account ?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Box padding="xl" paddingTop="s">
        <Text marginBottom="s" variant="title1" textAlign="center">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="m">
          Use your credentials below and login to your account
        </Text>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: "", password: "", rembember: false }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            values,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter Your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock"
                placeholder="Enter Your Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
              />
              <Box flexDirection="row" justifyContent="space-between">
                <CheckBox
                  label="Rembember me"
                  checked={values.rembember}
                  onChange={() => setFieldValue("rembember", !values.rembember)}
                />
                <Button variant="transparent" onPress={() => true}>
                  <Text color="primary" paddingRight="xxl">
                    Forgot password
                  </Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="s">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Log into your account"
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
