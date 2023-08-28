import { LogoSSHOP } from "../../../assets/images";
import ROUTERS from "../../../utils/constants/routers";
import { Menu, Button } from "antd";
import { PhoneFilled } from "@ant-design/icons";
import SelectLanguage from "../../selectLanguage";
import { getRouterByLocation } from "../../../utils/helpers";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const { handleToggleMenuMobile } = props;
  const location = useLocation();
  console.log(location);
  const texts = useSelector((state) => state.system.texts);

  const itemMenu = ROUTERS.LANDING_PAGE.filter((it) => {
    return it.onMenu;
  }).map((it) => {
    return {
      label: texts[it?.label],
      key: it?.name,
      path: it?.path,
      icon: window.isMobile ? it?.icon : null,
    };
  });

  const menuOnClick = (item) => {
    if (item.key !== "SELECT_LANGUAGE" && item.key !== "BUTTON_PHONE") {
      window.navigatePage(item?.key);
    }
  };

  const callSupport = () => {
    // const linkElement = document.createElement("a")
    // linkElement.href = 'tel:+123456789'
    // linkElement.click()
    window.open(`tel:${texts?.SUPPORT_PHONE}`);
  };

  return (
    <div className="nav-bar" onClick={handleToggleMenuMobile}>
      <div className="nav-bar__content" onClick={(e) => e.stopPropagation()}>
        {window.isMobile && (
          <img className="logo-only-mobile" src={LogoSSHOP} />
        )}

        <Menu
          defaultOpenKeys={getRouterByLocation(location)?.name}
          selectedKeys={getRouterByLocation(location)?.name}
          mode={window.isMobile ? "vertical" : "horizontal"}
          items={[
            ...itemMenu,
            {
              label: <SelectLanguage />,
              key: "SELECT_LANGUAGE",
            },
            {
              label: (
                <Button
                  icon={<PhoneFilled />}
                  size={"large"}
                  className="button-primary-outline"
                  onClick={callSupport}
                >
                  {texts?.SUPPORT_PHONE?.replace("+84", "0")}
                </Button>
              ),
              key: "BUTTON_PHONE",
            },
          ]}
          onClick={menuOnClick}
        />
      </div>
    </div>
  );
};

export default NavBar;
