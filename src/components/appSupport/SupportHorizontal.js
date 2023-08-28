import { MessengerIcon, ZaloIcon, FacebookIcon } from "../../assets/icons";
import './css/index.scss';

const SupportHorizontal = (props) => {

    const {
        supportZalo = 'https://zalo.me/2744995084207432799',
        supportPhone = '+84969877888',
        supportMessenger = 'https://www.messenger.com/t/100093630422263',
        supportFanpage = 'https://www.facebook.com/100093630422263',
    } = props;

    return (
        <div className="app-support-horizontal">
            <div>
                <a target='_blank' href={supportFanpage}>
                    <img src={FacebookIcon} className="icon-support" />
                </a>
            </div>
            <div>
                <a target='_blank' href={supportMessenger}>
                    <img src={MessengerIcon} className="icon-support" />
                </a>
            </div>
            <div>
                <a target='_blank' href={supportZalo}>
                    <img src={ZaloIcon} className="icon-support" />
                </a>
            </div>

        </div>
    )
}

export default SupportHorizontal;