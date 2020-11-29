class HomeController {
  async index(req, res) {
    res.json('home controller');
  }
}

export default new HomeController();
