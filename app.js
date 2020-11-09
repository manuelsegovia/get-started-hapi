const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });
  server.route({
    method: ['GET', 'POST'],
    path: '/',
    handler: (request, h) => '<h1>EL Chiquito Chingon!!!!!</h1>',
  });
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
