'use client';
import { AppStore, GooglePlay } from '@/assets/images';
// import { AppSupport } from '../../components';
import { useSelector } from 'react-redux'

import {
  Row, Col, Button, Form
} from 'antd';

import {
  PhoneIconSolid,
  EmailIconSolid,
  LocationIcon,
  UserIconSolid
} from '@/assets/icons'

import './css/index.scss';
// import {LINK_APPSTORE, LINK_GGPLAY} from "../../../../sspa-landing/src/utils/constants/config";
// import {APP_STORE, GGPLAY} from "../../../../sspa-landing/src/assets";

function LinkAppStore(props){
    const {
        linkAppIos = 'https://apps.apple.com/vn/app/sspa-qu%E1%BA%A3n-l%C3%BD-spa-salon/id6443398339?l=vi',
        linkAppAndroid = 'https://play.google.com/store/apps/details?id=sfin.sspa'
    } = props;

    return(
        <Row gutter={[24, 24]}>
            <Col span={12} lg={12} md={12} sm={12} xs={12}>
                <a target='_blank' href={linkAppAndroid}>
                    <img className='w-full' src={GooglePlay} />
                </a>
            </Col>

            <Col span={12} lg={12} md={12} sm={12} xs={12}>
                <a target='_blank' href={linkAppIos}>
                    <img className='w-full' src={AppStore} />
                </a>
            </Col>
        </Row>
    )
};

export default function AppFooter() {
  const texts = useSelector(state => state.system.texts);

  const gutterHorizontal = 40;
  const gutterVertical = 20;
  return (
    <div>Tét</div>
  )
}
