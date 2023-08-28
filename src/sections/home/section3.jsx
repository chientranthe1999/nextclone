import { Row, Col, Button } from 'antd';
import { ImgSection3 } from '../../../../assets/images';
import { CircleCheck } from '../../../../assets/icons';
import { BtnRegister } from '../../../../components';
import { useSelector } from 'react-redux';

const Section3 = () => {
  const texts = useSelector(state => state.system.texts);

  return (
    <div className='section section-3'>
      <div className='section-content'>
        <Row gutter={[50, 20]} className='row-reverse-xs'>
          <Col xs={24} md={24} lg={12} className='justify-content--right'>
            <div className='ant-col__content'>
              <h2 className='section-heading txt-green-color'>
                {texts?.EFFICIENT_AND_ACCURATE_WAREHOUSE_MANAGEMENT}
              </h2>

              <Row className='row-nowrap'>
                <Col>
                  <CircleCheck className='circle-check' />
                </Col>

                <Col>
                  <p className='paragraph'>{texts?.SMART_REPORT_STATISTICS}</p>
                </Col>
              </Row>

              <Row className='row-nowrap'>
                <Col>
                  <CircleCheck className='circle-check' />
                </Col>

                <Col>
                  <p className='paragraph'>{texts?.ORDER_NOTIFICATIONS_REVENUE_FLUCTUATIONS}</p>
                </Col>
              </Row>

              <Row className='row-nowrap'>
                <Col>
                  <CircleCheck className='circle-check' />
                </Col>

                <Col>
                  <p className='paragraph'>{texts?.PROVIDE_A_FULL_RANGE_OF_EXPORT}</p>
                </Col>
              </Row>

              <BtnRegister />
            </div>
          </Col>

          <Col xs={24} md={24} lg={12}>
            <img src={ImgSection3} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section3;