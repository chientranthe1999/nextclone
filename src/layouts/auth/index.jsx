import {Layout} from 'antd'
import PageContent from '../../routes';
import ROUTERS from '../../utils/constants/routers';
import {AppHeader} from '../../components'

const AuthLayout = () => {
  return (
    <Layout className='auth-layout'>
      <Layout.Header>
        <AppHeader />
      </Layout.Header>
      <Layout.Content>
        <PageContent routers={ROUTERS.AUTH_PAGE}/>
      </Layout.Content>
    </Layout>
  )
}

export default AuthLayout;