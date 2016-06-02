import Server from 'socket.io';

const port = 8090;

export default function startServer() {
  const io = new Server().attach(port);
}
