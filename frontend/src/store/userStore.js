import { create } from "zustand";

export const useUserStore = create(
    (set) => ({
        users: [],
        total: 0,

        setUsers: (users, total) =>
            set({
                users,
                total,
            }),
    })
);