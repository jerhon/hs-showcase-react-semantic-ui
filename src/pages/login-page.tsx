import { Formik, Form as FormikForm } from "formik"
import React from "react"
import {Button, Card, Form, Header, Icon} from "semantic-ui-react"
import styles from "./login-page.module.css"
import * as Yup from "yup"
import Input from "../form/input"
import clsx from "clsx";

const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .required('E-mail is required.')
        .email('Must be an e-mail address.'),

    password: Yup
        .string()
        .required('Password is required.')
})

export function LoginPage() {

    const logo = <span style={{borderRadius: '5px', backgroundColor: '#D08521', color: 'white', padding: '5px', marginRight: '10px'}}>
        CL
    </span>

    return <div className={styles.layout}>
        <Card className={styles.card} fluid >
            <Card.Content header >
                <Card.Header>{logo} Company Application</Card.Header>
            </Card.Content>
            <Card.Content>
                <div className={styles.container}>
                    <div className={styles.containerItem}>
                        <Header>Sign In</Header>
                        <Formik
                            initialValues={{email: '', password: ''}}
                            validationSchema={validationSchema}
                            onSubmit={(values) => alert(`Hello, ${values.email}!`)}>
                            {(form, ) =>
                            <FormikForm className="ui form" noValidate>
                                <Form.Field
                                    required
                                    error={form.errors.email && form.touched.email && {
                                        content: form.errors.email,
                                        pointing: 'above'
                                    }}
                                    control={Input}
                                    label="E-mail"
                                    name="email"
                                    placeholder="user@example.com" />
                                <Form.Field
                                    name="password"
                                    control={Input}
                                    label="Password"
                                    placeholder="Password"
                                    required
                                    type="password"
                                    error={form.errors.password && form.touched.password && {
                                            content: form.errors.password,
                                            pointing: 'above'
                                        }} />
                                <div style={{fontSize: "0.9em", color: "#666", marginBottom: "16px"}}>By continuing, I certify that I am the user associated with the login provided and have permission to access this system.</div>
                                <div className={styles.center}>
                                    <Button type='submit' primary disabled={!form.isValid || !form.touched }>Sign In</Button>
                                </div>
                            </FormikForm>}
                        </Formik>
                    </div>
                    <div className={styles.containerDivider} ><div /></div>
                    <div className={clsx(styles.containerItem, styles.center)}>
                        <Icon name="signup" size="big" />
                        <div style={{margin: '6px', marginBottom: '24px'}}>Create a new account...</div>
                        <Button className={styles.center} onClick={() => alert('Sign up clicked!')} >Sign Up</Button>
                    </div>
                </div>
            </Card.Content>
        </Card>
        <div className={styles.attribution}>Photo by <a tabIndex={-1} href="https://unsplash.com/@kalenemsley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kalen Emsley</a> on <a tabIndex={-1} href="https://unsplash.com/s/photos/mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
    </div>
}
