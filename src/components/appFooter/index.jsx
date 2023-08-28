import { AppStore, GooglePlay } from '../../assets/images';
import { AppSupport } from '../../components';
import { useSelector } from 'react-redux'

import {
  Row, Col, Button, Form
} from 'antd';

import {
  PhoneIconSolid,
  EmailIconSolid,
  LocationIcon,
  UserIconSolid
} from '../../assets/icons'

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

const AppFooter = () => {
  const texts = useSelector(state => state.system.texts);

  const gutterHorizontal = 40;
  const gutterVertical = 20;
  return (
    <div className='app-footer'>
      <div className='app-footer__content'>
        <Row gutter={[gutterHorizontal, gutterVertical]}>
          <Col xs={24} md={24} lg={14}>
            <h2 className='app-footer__content__heading'>
              {texts?.OWNERS_AND_DEVELOPMENT_UNIT}
            </h2>

            <h4 className='app-footer__content__sub-heading'>
              {texts?.SFIN_SMART_JSC}
            </h4>

            <Row gutter={[8, 0]} className='row-nowrap'>
              <Col>
                <LocationIcon className='icon-footer' />
              </Col>

              <Col>
                <p className='paragraph'>{texts?.SFIN_ADDRESS}</p>
              </Col>
            </Row>

            <Row gutter={[8, 0]} className='row-nowrap'>
              <Col>
                <PhoneIconSolid className='icon-footer' />
              </Col>

              <Col>
                <p className='paragraph'>
                    {texts?.LABEL_HOTLINE}: {' '}
                    <a href={`tel:${texts?.SUPPORT_PHONE}`}>
                         {texts?.SUPPORT_PHONE}
                    </a>
                </p>
              </Col>
            </Row>

            <Row gutter={[8, 0]} className='row-nowrap'>
              <Col>
                <EmailIconSolid className='icon-footer' />
              </Col>

              <Col>
                <p className='paragraph'>
                    {texts?.LABEL_EMAIL}: {' '}
                    <a href={`mailto:${texts?.SUPPORT_EMAIL}`}>
                         {texts?.SUPPORT_EMAIL}
                    </a>

                </p>
              </Col>
            </Row>
          </Col>

     {/*     <Col xs={24} md={24} lg={10}>
            <h2 className='app-footer__content__heading'>
              {texts?.COOPERATION_AND_CUSTOMER_CARE_UNIT}
            </h2>

            <h4 className='app-footer__content__sub-heading'>
              {texts?.GOL_SOFTWARE_COMPANY_LIMITED}
            </h4>

            <Row gutter={[8, 0]} className='row-nowrap'>
              <Col>
                <UserIconSolid className='icon-footer' />
              </Col>

              <Col>
                <p className='paragraph'>{texts?.GOL_PHONE_CONTACT}</p>
              </Col>
            </Row>

            <Row gutter={[8, 0]} className='row-nowrap'>
              <Col>
                <PhoneIconSolid className='icon-footer' />
              </Col>

              <Col>
                <p className='paragraph'>
                  {texts?.LABEL_HOTLINE}: {texts?.GOL_HOTLINE}
                </p>
              </Col>
            </Row>

            <Row gutter={[8, 0]} className='row-nowrap'>
              <Col>
                <EmailIconSolid className='icon-footer' />
              </Col>

              <Col>
                <p className='paragraph'>
                  {texts?.LABEL_EMAIL}: {texts?.SSHOP_SUPPORT_EMAIL_GOLSOFT}
                </p>
              </Col>
            </Row>
          </Col>*/}

          <Col xs={24} md={24} lg={14}>
           <h2 className='app-footer__content__heading'>
              {texts?.CERTIFICATION}
            </h2>

            <p className='paragraph'>
              {texts?.BUSINESS_LIECENSE}: 0109959309<br></br>{texts?.DATED} : 07/04/2022, {texts?.BY_BRO}
            </p>
          </Col>

          <Col xs={12} md={12} lg={10}>
              <LinkAppStore
                  linkAppIos={texts?.LINK_APP_IOS}
                  linkAppAndroid={texts?.LINK_APP_ANDROID}
              />

            {/*<Row gutter={[12, 0]}>*/}
              {/*<Col span={12}>*/}
                {/*<a target='_blank' href={texts?.LINK_APP_ANDROID || 'https://play.google.com/store/apps/details?id=sfin.sspa'}>*/}
                  {/*<img className='w-full' src={GooglePlay} />*/}
                {/*</a>*/}
              {/*</Col>*/}

              {/*<Col span={12}>*/}
                {/*<a target='_blank' href={texts?.LINK_APP_IOS || 'https://apps.apple.com/vn/app/sspa-qu%E1%BA%A3n-l%C3%BD-spa-salon/id6443398339?l=vi'}>*/}
                  {/*<img className='w-full' src={AppStore} />*/}
                {/*</a>*/}
              {/*</Col>*/}

              {/*<Col span={24}>*/}
                {/*<AppSupport*/}
                  {/*supportZalo={texts?.SUPPORT_ZALO}*/}
                  {/*supportPhone={texts?.SUPPORT_PHONE}*/}
                  {/*supportMessenger={texts?.SUPPORT_MESSENGER}*/}
                  {/*supportFanpage={texts?.SUPPORT_FANPAGE}*/}
                {/*/>*/}
              {/*</Col>*/}
            {/*</Row>*/}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AppFooter;