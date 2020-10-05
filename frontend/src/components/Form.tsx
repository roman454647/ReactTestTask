import  React from 'react';
import {Button} from '@material-ui/core';
import {Field, Form, Formik, FormikProps} from "formik";
import {MyField} from "./MyField";
import * as Yup from 'yup'
import {makeStyles} from "@material-ui/core/styles";
import {AddNewUserAction, NewUserModel} from "../redux/action";
import {useDispatch} from "react-redux";

interface Values {
    name: string;
    email: string;
    age: number;
}

export const MyForm: React.FC = () => {
    const dispatch = useDispatch();

    const addNewUser = (values: NewUserModel) => {
        dispatch(AddNewUserAction(values))
    }

    const useStyles = makeStyles({
        errorMessage: {
          color: 'red',
        },
    });

    const classes = useStyles();

    return (
        <Formik
            initialValues={{name:'', email: '', age: 0}}
            onSubmit={(values, { resetForm }) => {
                resetForm();
                addNewUser(values);
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .min(2, 'Too Short!')
                    .max(50, 'Too Long!')
                    .required('Please enter full name'),
                email: Yup.string()
                    .email()
                    .required('Enter valid email-id'),
                age:  Yup.number()
                    .min(18, "You must be at least 18 years")
                    .max(60, "You must be at most 60 years"),
            })}
        >
        {(props: FormikProps<Values>) => {
            const {
                touched,
                errors,
            } = props
            return (
            <Form>
                <div>
                    <Field placeholder='Name' name="name" component={MyField}/>
                    {!!(errors.name && touched.name) ? (<div className={classes.errorMessage}>{errors.name}</div>) : null}
                </div>
                <div>
                    <Field placeholder='Email' name="email" component={MyField}/>
                    {!!(errors.email && touched.email) ? (<div className={classes.errorMessage}>{errors.email}</div>) : null}
                </div>
                <div>
                    <Field placeholder='Age' name="age"component={MyField}/>
                    {!!(errors.age && touched.age) ? (<div className={classes.errorMessage}>{errors.age}</div>) : null}
                </div>
             <Button type='submit'>Submit</Button>
            </Form>
            )}
        }</Formik>
    );
};