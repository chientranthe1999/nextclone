import { Row, Col, Button } from 'antd';
import { Shop, Warehouse, Calendar } from '../../../../assets/images';
import { Box } from '@mui/material'
import { useSelector } from 'react-redux';

import {
  WarehouseIcon,
  FingerprintIcon,
  ShopIcon,
  CheckIcon,
} from '../../../../assets/icons';

const Section1 = (props) => {
  const { handleGoToServicePriceList } = props;
  const texts = useSelector(state => state.system.texts);

  return (
    <div className='section section-1'>
      <div className='section-content'>
        <h1 className='section-heading'  style={{color:"#484848", fontWeight: 700}}>
          {texts?.SHOP_HELP_YOU_MANAGE_YOUR_SALES_EASILY_EFFECTIVELY?.toUpperCase()}
        </h1>

        <Row gutter={[20, 0]} className='row-nowrap content-overflow-x'>
          <Col xs={24} md={12} lg={8}>
            <div className='ant-col__content'>

              <div className='ant-col__content__center'>
                <img src={Warehouse} />
              </div>

              <div className='ant-col__content__bottom'>
                <h3 className='ant-col__content__title' >{texts?.EASY_TO_USE_ON_MULTIPLE_PLATFORMS}</h3>

                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>{texts?.SMART_INTERFACE_USED_IN_COMPUTERS_SMART_DEVICES}</p>
                  </Col>
                </Row>

                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>{texts?.EFFICIENT_AND_INTELLIGENT_WAREHOUSE_OPERATION}</p>
                  </Col>
                </Row>

                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>
                      {texts?.QUICK_IMPORT_AND_EXPORT_OPERATIONS}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className='ant-col__content'>

              <div className='ant-col__content__center'>
                <img src={Shop} />
              </div>

              <div className='ant-col__content__bottom'>
                <h3 className='ant-col__content__title'>
                  {texts?.QUICK_INPUT_AND_SALES_MANAGEMENT_INTERFACE}
                </h3>

                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>{texts?.OPERATE_YOUR_CHAIN_AND_STORES_WITH_EASE}</p>
                  </Col>
                </Row>
{/*
                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>{texts?.INVENTORY_REPORT_HOT_SELLING_PRODUCTS}</p>
                  </Col>
                </Row>*/}

                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>{texts?.ACCURATE_TO_EACH_PRODUCT_UNIT}</p>
                  </Col>
                </Row>

                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>
                      {texts?.SUPPORT_CUSTOMERS_TO_PLACE_ORDERS_REMOTELY}
                    </p>
                  </Col>
                </Row>

              </div>
            </div>
          </Col>

          <Col xs={24} md={12} lg={8}>
            <div className='ant-col__content'>
              <div className='ant-col__content__center'>
                <img src={Calendar} />
              </div>

              <div className='ant-col__content__bottom'>
                <h3 className='ant-col__content__title'>
                  {texts?.OPERATE_THE_STORE_REMOTELY_SMOOTHLY_IN_DETAIL}
                </h3>

                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>
                      {texts?.LOOK_UP_IMPORT_AND_EXPORT_HISTORY}
                    </p>
                  </Col>
                </Row>

                <Row className='row-nowrap'>
                  <Col>
                    <CheckIcon className='check-icon' />
                  </Col>

                  <Col>
                    <p className='paragraph'>
                      {texts?.CALCULATING_SALARY_UPDATED_EVERY_DAY}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section1;