import { Row, Col, Button } from 'antd';
import { ImgSection4 } from '../../../../assets/images';
import { CircleCheck } from '../../../../assets/icons';
import { BtnRegister } from '../../../../components';
import { useSelector } from 'react-redux';

const Section4 = () => {
  const texts = useSelector(state => state.system.texts);

  return (
    <div className='section section-4'>
      <div className='section-content'>
        <Row gutter={[0, 20]} className='row-reverse-xs'>
          <Col xs={24} md={24} lg={12} className='justify-content--right'>
            <div className='ant-col__content'>
              <Row>
                <Col span={24}>
                  <h3 className='ant-col__content__title'>
                    <CircleCheck className='circle-check' />
                    {texts?.SELL_RIGHT_ON_THE_PHONE}
                  </h3>

                  <p className='paragraph'>{texts?.SALES_MANAGEMENT_APPLICATION}</p>
                </Col>

                <Col span={24}>
                  <h3 className='ant-col__content__title'>
                    <CircleCheck className='circle-check' />
                    {texts?.VIEW_REPORTS_ANYTIME_ANYWHERE}
                  </h3>

                  <p className='paragraph'>{texts?.SALES_SOFTWARE_ON_THE_PHONE_WILL}</p>
                </Col>

                <Col span={24}>
                  <h3 className='ant-col__content__title'>
                    <CircleCheck className='circle-check' />
                    {texts?.COMPATIBLE_WITH_ALL_MOBILE_DEVICES}
                  </h3>

                  <p className='paragraph'>{texts?.THE_SSHOP_APPLICATION_IS_AVAILABLE}</p>
                </Col>
              </Row>

              <BtnRegister />
            </div>
          </Col>

          <Col xs={24} md={24} lg={12}>
            <img src={ImgSection4} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section4;