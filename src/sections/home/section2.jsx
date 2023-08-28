import { Row, Col, Button } from 'antd';
import { ImgSection2 } from '../../../../assets/images';
import { CircleCheck } from '../../../../assets/icons';
import { BtnRegister } from '../../../../components';
import { useSelector } from 'react-redux';

const Section2 = (props) => {
  const texts = useSelector(state => state.system.texts);

  return (
    <div className='section section-2'>

      <div className='section-content'>
        <Row gutter={[50, 20]}>
          <Col xs={24} md={24} lg={12}>
            <img src={ImgSection2} />
          </Col>

          <Col xs={24} md={24} lg={12}>
            <div className='ant-col__content'>
              <h2 className='section-heading txt-green-color'>{texts?.PIONEERING_IN_PROVIDING_ONLINE_AND_OFFLINE}</h2>

              <p className='paragraph'>
                <span className='txt-sshop'></span>
              </p>

              <Row className='row-nowrap'>
                <Col>
                  <CircleCheck className='circle-check' />
                </Col>

                <Col>
                  <p className='paragraph'>{texts?.CREATE_A_CHAIN_OF_STORES_FUNCTIONAL}</p>
                </Col>
              </Row>

              <Row className='row-nowrap'>
                <Col>
                  <CircleCheck className='circle-check' />
                </Col>

                <Col>
                  <p className='paragraph'>{texts?.APPLYING_AI_TECHNOLOGY}</p>
                </Col>
              </Row>

              <Row className='row-nowrap'>
                <Col>
                  <CircleCheck className='circle-check' />
                </Col>

                <Col>
                  <p className='paragraph'>{texts?.CAPTURE_CUSTOMER_NEEDS}</p>
                </Col>
              </Row>

              <BtnRegister />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section2;