import { create } from 'zustand';

const useDepartamentStore = create((set) => ({
    departaments: [],
    isFeching: true,
    findAll: async () => {
        try {
            const response = await fetch(route('api.departaments.all'));
            if (!response.ok) {
                throw new Error('Erro ao buscar dados.');
            }
            const data = await response.json();
            set({ departaments: data });
        } catch (error) {
            console.error('Erro na requisição:', error);
        } finally {
            set({isFeching: false});
        }
    }
}));

export default useDepartamentStore;