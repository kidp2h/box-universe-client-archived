import React, { ReactElement, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  IoArrowForwardOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoKeyOutline,
  IoPersonOutline,
  IoWarningOutline,
} from 'react-icons/io5';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '@validations/LoginSchema';
import { NextPageWithLayout } from '../_app';
import AuthLayout from '@layouts/AuthLayout';
import Head from 'next/head';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginMutation from '@mutations/login.graphql';
import useThrottle from '@hooks/useThrottle';
import Cookies from 'js-cookie';
import moment from 'moment';

type Inputs = { username: string; password: string };
const Login: NextPageWithLayout = () => {
  const router = useRouter();
  const [login] = useMutation(loginMutation);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const [disable, setDisable] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    if (!disable) {
      setDisable(true);
      const { username, password } = data;
      toast.promise(
        login({
          variables: {
            userInput: {
              username,
              password,
            },
          },
        }),
        {
          success: {
            render(result) {
              const dataGraphql = result.data;
              const { accessToken } = dataGraphql?.data?.login;
              Cookies.set('accessToken', accessToken, {
                sameSite: 'Lax',
                expires: moment().add(1209600, 'seconds').toDate(),
              });
              return `Sign in to universe success !! You will automatically redirect to index`;
            },
            progressClassName: 'bg-purple-500',
            onClose: () => {
              router.replace('/', undefined, { shallow: true });
            },
          },
          error: {
            render() {
              setDisable(false);
              return 'Oops! Authorize failed, please try again or check your username and password';
            },
          },
        },
        {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          icon: <IoWarningOutline size={20} className="text-purple-500" />,
          bodyClassName: 'bg-transparent',
          className: 'bg-transparent backdrop-blur-sm border-purple-500',
          pauseOnFocusLoss: false,
        },
      );
    }
  };
  const debounceOnSubmit = useThrottle(onSubmit, 1000);
  const [isHidden, setHidden] = useState<boolean>(true);
  const handleInspectPassword = () => {
    setHidden(!isHidden);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <form
        onSubmit={handleSubmit(debounceOnSubmit)}
        className="flex flex-col form-auth justify-center h-full w-8/12 lg:w-full">
        <FormGroup className="mb-5">
          <label
            htmlFor="username"
            className="text-white select-none text-xl uppercase flex flex-row items-center mb-5 ">
            Username
          </label>

          <div className="relative w-fit">
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
        <FormGroup>
          <label
            htmlFor="password"
            className="text-white select-none text-xl uppercase flex flex-row items-center mb-5">
            Password
          </label>
          <div className="relative w-fit">
            {errors.password && (
              <span className="text-red-500 mb-0 text-sm absolute -top-6 left-0 bg-transparent">
                {errors.password.message}
              </span>
            )}
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
        <FormGroup className="flex flex-row justify-self-start self-start mt-5">
          <FormControlLabel
            control={<Checkbox defaultChecked className="text-purple-500" />}
            label={
              <Typography variant="inherit" color="white">
                Remember password
              </Typography>
            }
            className="text-white text-xs"
          />
        </FormGroup>
        <FormGroup className="mt-5 h-fit justify-self-start self-start ">
          <div className="buttonIcon relative hover:bg-purple-500 rounded-lg ">
            <input
              type="submit"
              className="w-16 h-16 z-50 border-purple-500 rounded-lg btnNeon text-transparent hover:bg-purple-500 cursor-pointer "
            />
            <IoArrowForwardOutline
              color="white"
              size={20}
              className="absolute top-1/2 z-30 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
            />
          </div>
        </FormGroup>
        <FormGroup className="flex flex-row text-xs mt-3 self-start text-red-500 uppercase">
          <span className="mr-2 text-white">Don&apos;t have account ?</span>
          <Link href="/auth/register">Register now</Link>
        </FormGroup>
      </form>
    </>
  );
};

export async function getServerSideProps(ctx: any) {
  const accessToken = ctx.req.cookies.accessToken;
  if (accessToken) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  return {
    props: {},
  };
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
