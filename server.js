import app from './app';

// const port = 4000;
app.listen(process.env.APP_PORT || 4000, () => {
  console.log('Api iniciada');
});
