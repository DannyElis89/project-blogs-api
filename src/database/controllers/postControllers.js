const postServices = require('../services/postServices');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { data } = req.user;

  const result = await postServices.createPost(title, content, categoryIds, data);

  if (result.code || result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  return res.status(201).json(result);
};

const getAll = async (req, res) => {
  const result = await postServices.getAll();

  if (result.code || result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await postServices.getById(id);

  if (result.code || result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  return res.status(200).json(result);
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { data } = req.user;
  // console.log('================================');
  // console.log(data);
  const result = await postServices.updatePost(title, content, id, data);

  if (result.code || result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  return res.status(200).json(result);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { data } = req.user;
  // console.log('================================');
  // console.log(data);

  const result = await postServices.deletePost(id, data);

  if (result.code || result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  return res.status(204).end();
};

const search = async (req, res) => {
  const { q } = req.query;

  const result = await postServices.search(q);

  if (result.code || result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  return res.status(200).json(result);
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
  deletePost,
  search,
};
