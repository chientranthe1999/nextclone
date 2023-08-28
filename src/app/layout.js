"use client";

import { Provider } from "react-redux";
import store from "@/redux/store/reduxStore";


import React, { useEffect, useMemo, useState } from "react";
import { Layout } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { SSHOP_SPA_TOKEN } from "@/utils/constants/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-number-input/style.css";
import { getLocaleConfigByCountryCode, updateCustomerConfigLanguage } from "@/logic/auth/languageSetting/actions";
import { actionSaveLanguage, getUserInfo} from "@/logic/auth/system/actions";
import { isEmpty } from "@/utils/helpers";

import { navigatePages } from "@/utils/helpers/navigate";
import BaseLayout from "@/components/baselayout";

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body>
        <Layout className="app-container">
          <Provider store={store}>
            <BaseLayout>
              {children}
            </BaseLayout>
          </Provider>
          <div id="recaptcha-container"></div>
        </Layout>
      </body>
    </html>
  );
}
