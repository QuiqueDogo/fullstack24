import { Table } from "antd";

export default function UserTable({
    users,
    total,
    page,
    onPageChange,
}) {
    const columns = [
        {
            title: "Nombre",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Edad",
            dataIndex: "age",
        },
        {
            title: "País",
            dataIndex: "country",
        },
    ];

    return (
        <Table
            rowKey="id"
            columns={columns}
            dataSource={users}
            pagination={{
                current: page,
                pageSize: 10,
                total,
                onChange: onPageChange,
            }}
        />
    );
}