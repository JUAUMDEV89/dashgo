import { useQuery } from 'react-query';
import { api } from '../services/api';

type User = {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}


type GetUserResponse = {
    totalCount: number;
    users: User[]
}

export async function getUsers(page: number): Promise<GetUserResponse>{
    const { data, headers } = await api.get('/users', {
        params: {
            page: page
        },
    })

    const totalCount = Number(headers['x-total-count']);
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
    
    return {
        totalCount,
        users
    };
}

export function useUsers(page: number){
    return useQuery(['users', page], () => getUsers(page),
    {
        staleTime: 1000 * 5
    });
}