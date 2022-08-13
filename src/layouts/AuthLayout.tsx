import React, { memo, ReactNode } from 'react';
import Blob from '@components/Blob';
import Mesh1 from '@images/mesh3.jpg';
import Mesh2 from '@images/mesh4.jpg';
import imageForm from '@images/logo.png';
import bg from '@images/bg.png';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import withLogout from '@middlewares/logout';

type Props = {
  children: ReactNode;
};
const AuthLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Image
        id="bg"
        className="fixed top-0 left-0 min-w-full min-h-full"
        src={bg.src}
        layout="fill"
        alt=""
      />
      <Blob image={Mesh1.src} x={500} y={300} />
      <Blob image={Mesh2.src} x={-200} y={0} />
      <ToastContainer newestOnTop={true} limit={5} />
      <div className="wrapLayout">
        <div className="flex justify-center wrapper items-center h-screen sm:overflow-hidden">
          <div className="flex justify-center wrapperForm items-center lg:h-4/5 xl:w-auto  h-full md:w-auto w-full rounded-2xl lg:flex-row flex-col">
            <div className="wrapper__imgForm rounded-l flex-col items-center justify-center bg-gradient-to-r from-purple-500 h-full lg:flex hidden">
              <div className=" flex items-center justify-center select-none pointer-events-none">
                <div className="imgForm xl:w-6/12 xl:h-6/12 sm:w-5/12 sm:h-5/12  select-none">
                  <Image src={imageForm.src} alt="" layout="intrinsic" height={500} width={500} />
                </div>
              </div>
              <div className="wrapper__textImageForm text-white uppercase font-bold text-4xl flex items-center justify-center flex-col select-none">
                <div className="tracking-widest mt-5 ">
                  <span className="text-purple-500 bg-white rounded-l-md pl-2">BOX</span>
                  <span className="bg-purple-500 rounded-r-md pr-2">UNIVERSE</span>
                </div>
              </div>
            </div>
            <div className="divider h-full w-1 lg:mr-3 lg:block hidden " />
            <div className="wrapper__formAuth flex justify-center items-center lg:w-7/12 w-full h-full ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withLogout(memo(AuthLayout));
