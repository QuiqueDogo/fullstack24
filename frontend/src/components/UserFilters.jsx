import { Input, Select, Space } from "antd";

const countries = [
    "México",
    "Estados Unidos",
    "Canadá",
    "España",
];

export default function UserFilters({
    search,
    country,
    onSearchChange,
    onCountryChange,
}) {
    return (
        <Space
            style={{
                marginBottom: 16,
                width: "100%",
            }}
        >
            <Input
                placeholder="Buscar usuario..."
                value={search}
                onChange={(e) =>
                    onSearchChange(e.target.value)
                }
            />

            <Select
                placeholder="País"
                allowClear
                value={country}
                style={{
                    width: 200,
                }}
                onChange={onCountryChange}
            >
                {countries.map((country) => (
                    <Select.Option
                        key={country}
                        value={country}
                    >
                        {country}
                    </Select.Option>
                ))}
            </Select>
        </Space>
    );
}