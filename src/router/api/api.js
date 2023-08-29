module.exports = {
  group: {
    prefix: '',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      validator: [],
      handler: async (req, res) => {
        res.json({ items: [{ roleId: 1236, roleName: 'LeadDev' }] });
      },
    },
    {
      method: 'get',
      path: '/test',
      handler: (req, res) => {
        res.json({ items: [{ roleId: 1236, roleName: 'LeadDev' }] });
      },
    },
  ],
};
