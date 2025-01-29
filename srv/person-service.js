const cds = require("@sap/cds")

class PersonService extends cds.ApplicationService {
    async init() {
    this.on("createPerson", async (req) => { 
        const { Person } = this.entities
        var results
        try {
            const person1 = {ID:cds.utils.uuid(), name: null, gender:'M'}
            const result = await cds.ql.INSERT(person1).into(Person)
            results = "Succesful"
          } catch (error) {
            results = error
          }      
        return  results        
    })
    return super.init()
    }
}

module.exports = PersonService