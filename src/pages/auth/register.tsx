import React, { useState, ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  IoArrowForwardOutline,
  IoCheckmarkDoneOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoKeyOutline,
  IoMailOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import '@styles/AuthLayout.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import RegisterSchema from '@validations/RegisterSchema';
import AuthLayout from '@layouts/AuthLayout';
import { NextPageWithLayout } from '../_app';
import { useMutation } from '@apollo/client';
import createUser from '@mutations/createUser.graphql';
import Head from 'next/head';

type Inputs = {
  username: string;
  password: string;
  confirm: string;
  email: string;
};
const Register: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });
  const [createUserMutation] = useMutation(createUser);
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const { username, password, email } = data;
    createUserMutation({
      variables: {
        userInput: {
          username,
          password,
          email,
        },
      },
    });
  };
  const [isHidden, setHidden] = useState<boolean>(true);
  const handleInspectPassword = () => {
    setHidden(!isHidden);
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center h-full w-8/12 lg:w-full form-auth">
        <FormGroup className="flex flex-row">
          <FormGroup className="mb-5 mr-5">
            <label
              htmlFor="username"
              className="text-white select-none text-xl uppercase flex flex-row items-center mb-5 ">
              Username
            </label>

            <div className="relative">
              {errors.username && (
                <span className="text-red-500 mb-0 text-sm absolute -top-6 left-0 bg-transparent">
                  {errors.username.message}
                </span>
              )}
              <input
                {...register('username')}
                name="username"
                placeholder="username"
                id="username"
                className={`placeholder:select-none neon ${
                  errors.username && 'error'
                } text-lg align-middle placeholder:text-sm placeholder:uppercase w-60 h-12 bg-transparent rounded-lg focus: outline-0  pl-10 pr-12 border-purple-500`}
                autoComplete="off"
                spellCheck="false"
              />
              <IoPersonOutline
                color="white"
                className={`absolute top-1/2 transform -translate-y-1/2 ml-3 ${
                  errors.username ? 'text-red-500' : 'text-purple-500'
                }`}
                size={20}
              />
            </div>
          </FormGroup>
          <FormGroup className="mb-5">
            <label
              htmlFor="email"
              className="text-white select-none text-xl uppercase flex flex-row items-center mb-5 ">
              Email
            </label>
            <div className="relative">
              {errors.email && (
                <span className="text-red-500 mb-0 text-sm absolute -top-6 left-0 bg-transparent">
                  {errors.email.message}
                </span>
              )}
              <input
                {...register('email')}
                name="email"
                placeholder="Email"
                type="email"
                id="email"
                className={`placeholder:select-none neon ${
                  errors.email && 'error'
                } text-lg align-middle placeholder:text-sm placeholder:uppercase w-60 h-12 bg-transparent rounded-lg focus: outline-0  pl-10 pr-12 border-purple-500`}
                autoComplete="off"
                spellCheck="false"
              />
              <IoMailOutline
                color="white"
                className={`absolute top-1/2 transform -translate-y-1/2 ml-3 ${
                  errors.email ? 'text-red-500' : 'text-purple-500'
                }`}
                size={20}
              />
            </div>
          </FormGroup>
        </FormGroup>
        <FormGroup className="flex flex-row ">
          <FormGroup className="mb-5 mr-5">
            <label
              htmlFor="password"
              className="text-white select-none text-xl uppercase flex flex-row items-center mb-5 ">
              Password
            </label>
            <div className="relative w-fit">
              {isHidden ? (
                <IoEyeOutline
                  color="white"
                  size={20}
                  className={`cursor-pointer ${
                    errors.password ? 'text-red-500' : 'text-purple-500'
                  } absolute top-1/2 right-5 transform -translate-y-1/2`}
                  onClick={handleInspectPassword}
                />
              ) : (
                <IoEyeOffOutline
                  color="white"
                  size={20}
                  className={`cursor-pointer ${
                    errors.password ? 'text-red-500' : 'text-purple-500'
                  } absolute top-1/2 right-5 transform -translate-y-1/2`}
                  onClick={handleInspectPassword}
                />
              )}
              {errors.password && (
                <span className="text-red-500 mb-0 text-sm absolute -top-6 left-0 bg-transparent">
                  {errors.password.message}
                </span>
              )}
              <input
                {...register('password')}
                name="password"
                placeholder="Password"
                type={isHidden ? 'password' : 'text'}
                id="password"
                className={`placeholder:select-none neon ${
                  errors.password && 'error'
                } text-lg align-middle placeholder:text-sm placeholder:uppercase w-60 h-12 bg-transparent rounded-lg focus: outline-0  pl-10 pr-12 border-purple-500`}
                autoComplete="off"
                spellCheck="false"
              />
              <IoKeyOutline
                color="white"
                className={`absolute top-1/2 transform -translate-y-1/2 ml-3 ${
                  errors.password ? 'text-red-500' : 'text-purple-500'
                }`}
                size={20}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <label
              htmlFor="confirm"
              className="text-white select-none text-xl uppercase flex flex-row items-center mb-5 ">
              Confirm Password
            </label>
            <div className="relative w-fit">
              {isHidden ? (
                <IoEyeOutline
                  color="white"
                  size={20}
                  className={`cursor-pointer ${
                    errors.confirm ? 'text-red-500' : 'text-purple-500'
                  } absolute top-1/2 right-5 transform -translate-y-1/2`}
                  onClick={handleInspectPassword}
                />
              ) : (
                <IoEyeOffOutline
                  color="white"
                  size={20}
                  className={`cursor-pointer ${
                    errors.confirm ? 'text-red-500' : 'text-purple-500'
                  } absolute top-1/2 right-5 transform -translate-y-1/2`}
                  onClick={handleInspectPassword}
                />
              )}
              {errors.confirm && (
                <span className="text-red-500 mb-0 text-sm absolute -top-6 left-0 bg-transparent">
                  {errors.confirm.message}
                </span>
              )}
              <input
                {...register('confirm')}
                name="confirm"
                placeholder="Confirm Password"
                type={isHidden ? 'password' : 'text'}
                id="confirm"
                className={`placeholder:select-none neon ${
                  errors.confirm && 'error'
                } text-lg align-middle placeholder:text-sm placeholder:uppercase w-60 h-12 bg-transparent rounded-lg focus: outline-0  pl-10 pr-12 border-purple-500`}
                autoComplete="off"
                spellCheck="false"
              />
              <IoCheckmarkDoneOutline
                color="white"
                className={`absolute top-1/2 transform -translate-y-1/2 ml-3 ${
                  errors.confirm ? 'text-red-500' : 'text-purple-500'
                }`}
                size={20}
              />
            </div>
          </FormGroup>
        </FormGroup>
        <FormGroup className="flex flex-row justify-self-start self-start mt-0 text-xs">
          <FormControlLabel
            control={<Checkbox defaultChecked className="text-purple-500" />}
            label={
              <Typography variant="inherit" color="white">
                I agree to the Terms & Conditions
              </Typography>
            }
            className="text-white text-xs"
          />
        </FormGroup>
        <FormGroup className="mt-5 h-fit justify-self-start self-start ">
          <div className="buttonIcon relative hover:bg-purple-500 rounded-lg">
            <input
              type="submit"
              className="w-16 h-16 border-purple-500 rounded-lg btnNeon text-transparent hover:bg-purple-500 cursor-pointer "
            />
            <IoArrowForwardOutline
              color="white"
              size={20}
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
            />
          </div>
        </FormGroup>
        <FormGroup className="flex flex-row text-xs mt-3 self-start text-red-500 uppercase">
          <span className="mr-2 text-white">Already have account ?</span>
          <Link href="/auth/login">LogIn now</Link>
        </FormGroup>
      </form>
    </>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
