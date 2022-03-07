import { createServer, Model } from "miragejs"

type User = {
    email: string;
    password: string;
    created_at: string
}

export function MakeServer() {
  const server = createServer({

    models:{
        user: Model.extend<Partial<User>>({})
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = '';
      this.passthrough();
    }
  })

  return server;
}