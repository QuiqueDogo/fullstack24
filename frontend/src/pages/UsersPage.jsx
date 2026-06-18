import { useEffect, useState } from "react";

import { Card, Col, Row } from "antd";

import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import UserFilters from "../components/UserFilters";

import { getUsers } from "../api/users";

import { useUserStore } from "../store/userStore";

export default function UsersPage() {
    const { users, total, setUsers } =
        useUserStore();

    const [page, setPage] = useState(1);

    const [search, setSearch] =
        useState("");

    const [country, setCountry] =
        useState("");

    const loadUsers = async () => {
        try {
            const response =
                await getUsers(
                    page,
                    search,
                    country
                );

            setUsers(
                response.data.data,
                response.data.total
            );
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadUsers();
    }, [page, search, country]);

    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Registrar Usuario">
                    <UserForm
                        onCreated={loadUsers}
                    />
                </Card>
            </Col>

            <Col span={16}>
                <Card title="Usuarios">
                    <UserFilters
                        search={search}
                        country={country}
                        onSearchChange={
                            setSearch
                        }
                        onCountryChange={
                            setCountry
                        }
                    />

                    <UserTable
                        users={users}
                        total={total}
                        page={page}
                        onPageChange={setPage}
                    />
                </Card>
            </Col>
        </Row>
    );
}