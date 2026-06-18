import { useState, useMemo, useEffect } from "react";
import { Input, Select, Space } from "antd";
import debounce from "lodash.debounce";
import Search from "antd/es/input/Search";

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
    const [localSearch, setLocalSearch] = useState(search);

    useEffect(() => {
        setLocalSearch(search);
    }, [search]);

    const debouncedSearch = useMemo(
        () => debounce((value) => onSearchChange(value), 300),
        [onSearchChange],
    );

    useEffect(() => {
        return () => debouncedSearch.cancel();
    }, [debouncedSearch]);

    return (
        <Space
            style={{
                marginBottom: 16,
                width: "100%",
            }}
        >
            <Search
                placeholder="Buscar usuario..."
                value={localSearch}
                allowClear
                onChange={(e) => {
                    setLocalSearch(e.target.value);
                    debouncedSearch(e.target.value);
                }}
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