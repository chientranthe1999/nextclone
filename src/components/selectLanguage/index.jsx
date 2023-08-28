import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
import { getListCountry } from "../../pages/auth/languageSetting/actions";
import { actionChangeLanguage } from '../../pages/auth/system/actions';
import {CaretDownOutlined} from '@ant-design/icons'

const SelectLanguage = () => {
  const dispatch = useDispatch()
  const texts = useSelector(state => state.system.texts)
  const locale = useSelector(state => state.system.locale)
  const [dataSelect, setDataSelect] = useState([]);

  useEffect(() => {
    getLanguageConfig()
  }, [])

  const getLanguageConfig = async () => {
    try {
      const res = await getListCountry()
      if (res.data.status.code == 200) {
        let dataSelect = []
        res.data?.data.forEach(i => dataSelect.push({
          value: i.countryCode,
          label:
            <div style={{ display: "flex" }}>
              <img src={i.imageUrl} style={{ height: "16px", alignSelf: "center" }} />

              <div className='txt-bold' style={{ marginLeft: "10px" }}>
                {i.countryName}
              </div>
            </div>
        }))
        setDataSelect(dataSelect)
      }
    } catch (error) {
      setDataSelect([])
    }
  }

  return (
    <Select
      size='middle'
      suffixIcon={<CaretDownOutlined />}
      value={locale}
      placeholder={texts.APP_SETTING_SELECT_LANGUAGE}
      onChange={(e) => dispatch(actionChangeLanguage(e))}
      options={dataSelect}
      style={{ minWidth: 150 }}
    />
  )
}
export default SelectLanguage