class Evolution {
    constructor (condition, variable, nextMonName) {
        this.condition = condition
        this.variable = variable
        this.nextMonName = nextMonName
    }

    static getChain(mon, dexArray) {
        const containsMonInEvos = (newMon) => {
            let isPreEvo = false
            newMon.evolutions.forEach(element => {
                if (element.nextMonName === mon.name) {
                    isPreEvo = true
                }
            });
            return isPreEvo
        }
        
        const findPreEvos = () => {
            let prePreEvo = ""
            let preEvo = dexArray.filter(containsMonInEvos)[0]
            if (preEvo) {
                prePreEvo = dexArray.filter(containsMonInEvos)[0]
            }
        }

        // return (

        // )
    }
}   

export default Evolution