import { Layout, Typography } from "antd";

import UsersPage from "./pages/UsersPage";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header>
        <Title
          level={3}
          style={{
            color: "#fff",
            margin: 0,
          }}
        >
          User Management
        </Title>
      </Header>

      <Content
        style={{
          padding: "24px",
        }}
      >
        <UsersPage />
      </Content>
    </Layout>
  );
}

export default App;