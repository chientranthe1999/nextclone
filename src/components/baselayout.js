import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { SSHOP_SPA_TOKEN } from "@/utils/constants/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-number-input/style.css";
import {
  getLocaleConfigByCountryCode,
  updateCustomerConfigLanguage,
} from "@/logic/auth/languageSetting/actions";
import { actionSaveLanguage, getUserInfo } from "@/logic/auth/system/actions";
import { isEmpty } from "@/utils/helpers";

import { navigatePages } from "@/utils/helpers/navigate";

export default function BaseLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  // window.navigatePage = (name, params = {}, query = {}) =>
  //   navigatePages(navigate, name, params, query);
  window.isMobile = isMobile;

  const dispatch = useDispatch();
  const locale = useSelector((state) => state.system.locale);
  const userInfo = useSelector((state) => state.profile.userInfo);

  const urlParams = useSearchParams();
  const paramUserToken = urlParams.get("user-token");

  useEffect(() => {
    let token = Cookies.get(SSHOP_SPA_TOKEN);

    if (paramUserToken) {
      Cookies.set(SSHOP_SPA_TOKEN, paramUserToken, { expires: 1 });
      token = paramUserToken;
    }

    if (token) {
      handleGetUserInfo();
    }

    if (window.innerWidth <= 1023) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    getLanguageText();
    if (!isEmpty(userInfo)) {
      updateCustomerConfigLanguage({ countryCode: locale });
    }
  }, [locale]);

  const handleGetUserInfo = async () => {
    try {
      dispatch(getUserInfo(navigate));
    } catch (error) {}
  };

  const getLanguageText = async () => {
    const res = await getLocaleConfigByCountryCode({
      countryCode: locale,
      filter: "CLINIC",
    });
    if (res.data.status.code == 200) {
      let texts = {};
      res.data.data.forEach((e) => {
        texts = { ...texts, ...e };
      });
      dispatch(actionSaveLanguage(texts));
    }
  };

  return <>{children}</>;
}
