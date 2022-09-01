import StartUp from './startUp';
let port = process.env.PORT || '5000';

StartUp.app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
