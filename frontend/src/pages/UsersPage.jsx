import { Card, Col, Row } from "antd";

import UserForm from "../components/UserForm";

export default function UsersPage() {
    const reloadUsers = () => { };

    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Registrar Usuario">
                    <UserForm
                        onCreated={reloadUsers}
                    />
                </Card>
            </Col>

            <Col span={16}>
                <Card title="Usuarios">
                    Tabla aquí...
                </Card>
            </Col>
        </Row>
    );
}