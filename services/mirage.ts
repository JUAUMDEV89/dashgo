import { createServer, Factory, Model } from "miragejs"

type User = {
    name: string;
    email: string;
    created_at: string
}

export function MakeServer() {
  const server = createServer({

    models:{
        user: Model.extend<Partial<User>>({})
    },

    factories:{
        user: Factory.extend({
            name(i: number){
                return `User ${i + 1}`
            },
            email(i: number){
                return `emailuser ${i + 1}@gmail.com`
            },
            createdAt(){
                return new Date()
            }
        })
    },

    seeds(server){
      server.createList('user', 10);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get("/users", (schema, request) => {
        const { page = 1, per_page = 10 } = request.queryParams;
        
        const total = schema.all('user').length;

        const start = (Number(page) * Number(per_page));
        const end = start + Number(per_page);
    
        const users = this.serialize(schema.all('user'))
          .user.slice(start, end);

        return new Response(
          200,
          { 'x-total-count': total },
          { users }
        )
       });

      this.post("/users");

      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}