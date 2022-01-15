const TITLE_INVALID = {
    message: '"title" is required',
};

const CONTENT_INVALID = {
    message: '"content" is required',
};

const CATEGORYIDS_REQUIRED = {
    message: '"categoryIds" is required',
};

module.exports = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title) return res.status(400).send(TITLE_INVALID);
    if (!content) return res.status(400).send(CONTENT_INVALID);
    if (!categoryIds) return res.status(400).send(CATEGORYIDS_REQUIRED);

    next();
};