/*************************************
 * Header
 * @file: components/header.jsx
 * @author: James Abiagam
 ************************************/
import Head from "next/head";

const Header = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
    </>
  );
};

export default Header;
