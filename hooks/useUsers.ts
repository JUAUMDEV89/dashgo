import { useQuery } from 'react-query';
import { api } from '../services/api';

export function useUsers(){
    return useQuery('users', async () => {
        const { data } = await api.get('/users')
        console.log(data);

        const users = data.users.map(user=>{
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                created_at: new Date(user.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        });
        
        return users;
     });
}