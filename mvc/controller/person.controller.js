const persons = [];

module.exports = ({
    find: (req, res) => {
        res.send(persons);
    },
    create: (req, res) => {
        const person = req.body;
        // console.log(person);
        persons.push(person);
        res.send(person);
    },
    findById: (req, res) => {
        const {id} = req.params;
        res.send(persons[id-1]);
    },
    update: (req, res) => {
        const {id} = req.params;
        const novo = req.body;      

        persons[id-1] = novo;
        persons.push(persons);

        res.send(novo);
    },
    delete: (req, res) => {
        const {id} = req.params;
        persons.splice(id-1,1);
        res.send();
    }
});