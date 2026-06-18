import {
    Form,
    Input,
    InputNumber,
    Button,
    message,
} from "antd";

import { createUser } from "../api/users";

export default function UserForm({
    onCreated,
}) {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            await createUser(values);

            message.success(
                "Usuario creado correctamente"
            );

            form.resetFields();

            onCreated();
        } catch (error) {
            message.error(
                "Error al crear usuario"
            );
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        >
            <Form.Item
                label="Nombre"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Nombre requerido",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                    },
                    {
                        type: "email",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Edad"
                name="age"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <InputNumber
                    min={1}
                    style={{
                        width: "100%",
                    }}
                />
            </Form.Item>

            <Form.Item
                label="País"
                name="country"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Button
                type="primary"
                htmlType="submit"
                block
            >
                Guardar Usuario
            </Button>
        </Form>
    );
}