/**
 * @name NextHead.js
 * @description All Meta tags, external links and script can be placed here
 * @version 0.0.0
 */

import React from 'react';
import Head from 'next/head';

const NextHead = () => (
  <Head>
    <title>NextJs Boilerplate</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="title" content="NextJs Boilerplate" />
    <meta name="description" content="NextJs Boilerplate Description" />
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://google.com/" />
    <meta property="og:title" content="NextJs Boilerplate" />
    <meta property="og:description" content="NextJs Boilerplate description" />
    <meta property="og:image" content="/images/logo.png" />
    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://google.com/" />
    <meta property="twitter:title" content="NextJs Boilerplate" />
    <meta property="twitter:description" content="NextJs Boilerplate description" />
    <meta property="twitter:image" content="/images/logo.png" />
    <meta name="theme-color" content="#061b3c" /> {/* For mobile */}
    <link rel="icon" href="/images/favicon.ico" />
  </Head>
);

export default NextHead;
