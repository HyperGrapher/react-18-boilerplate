import create from "zustand";

interface IUser {
    username: string
}

type Auth = {
	user: IUser | undefined;
	setUser: (type: IUser) => void;

	isAuth: boolean;
	setAuth: (type: boolean) => void;
};

const useAuthStore = create<Auth>((set) => ({
	user: undefined,
	setUser: (user: IUser) => set({ user: user }),

	isAuth: false,
	setAuth: (val: boolean) => set({ isAuth: val }),
}));

export default useAuthStore;