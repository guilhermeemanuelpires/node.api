const states = [];

module.exports = ({
    find: (req, res) => {
        res.send(states);
    },
    create: (req, res) => {
        const state = req.body;
        // console.log(state);
        states.push(state);
        res.send(state);
    },
    findById: (req, res) => {
        const {id} = req.params;
        res.send(states[id-1]);
    },
    update: (req, res) => {
        const {id} = req.params;
        const novo = req.body;      

        states[id-1] = novo;
        states.push(states);

        res.send(novo);
    },
    delete: (req, res) => {
        const {id} = req.params;
        states.splice(id-1,1);
        res.send();
    }
});